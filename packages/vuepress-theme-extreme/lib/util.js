const { prototype: objProto } = Object;
const { toString } = objProto;

export const isDev = process.env.NODE_ENV !== 'production';

export const noop = () => {};

// eslint-disable-next-line no-console
export const error = isDev && console ? console.error : noop;

export const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop,
};

export const isFunction = value => toString.call(value) === '[object Function]';

export const isArray = value => toString.call(value) === '[object Array]';

export default {};
