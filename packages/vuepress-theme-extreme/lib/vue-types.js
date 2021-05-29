import isFunction from 'lodash/isFunction';
import isArray from 'lodash/isArray';
import { sharedPropertyDefinition, error } from '@theme/lib/util';

const typesMap = {
  any: null,
  string: String,
  number: Number,
  boolean: Boolean,
  array: Array,
  object: Object,
  date: Date,
  func: Function,
  symbol: Symbol,
};
const validatorMap = {};

function getTypes(arr) {
  return arr.reduce((ret, v) => {
    if (v !== null && v !== undefined && ret.indexOf(v.constructor) === -1) {
      ret.push(v.constructor);
    }
    return ret;
  }, []);
}

function getType(type, validator = '', customType = null) {
  const props = { type: customType || typesMap[type] };

  Object.defineProperty(props, 'isRequired', {
    get() {
      this.required = true;
      return this;
    },
  });

  Object.defineProperty(props, 'def', {
    value(defaultValue) {
      this.default = defaultValue;
      return this;
    },
  });

  Object.defineProperty(props, 'validate', {
    value(fn) {
      this.validator = fn.bind(this);
      return this;
    },
  });

  if (isFunction(validator)) {
    props.validator = validator.bind(props);
  }

  return props;
}

const VueProps = Object.create(null, {
  instanceOf: {
    value(instanceConstructor) {
      return getType('instanceOf', '', instanceConstructor);
    },
  },
  oneOf: {
    value(arr) {
      if (!isArray(arr)) {
        error('[VueTypes error]: You must provide an array as argument');
      }
      const msg = `[VueTypes error]: oneOf - value should be one of "${arr.join('", "')}"`;
      const allowedTypes = getTypes(arr);

      return getType(
        'oneOf',
        function validator(value) {
          const valid = arr.indexOf(value) !== -1;
          if (!valid) error(msg);
          return valid;
        },
        allowedTypes.length ? allowedTypes : null,
      );
    },
  },
  oneOfType: {
    value(arr) {
      if (!isArray(arr)) {
        throw new TypeError('[VueTypes error]: You must provide an array as argument');
      }
      const allowedTypes = getTypes(arr);

      return getType('oneOfType', '', allowedTypes.length ? allowedTypes : null);
    },
  },
});

Object.keys(typesMap).forEach(type => {
  sharedPropertyDefinition.get = function proxyGetter() {
    return getType(type, validatorMap[type]);
  };
  Object.defineProperty(VueProps, type, sharedPropertyDefinition);
});

export default VueProps;
