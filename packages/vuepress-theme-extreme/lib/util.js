const { prototype: objProto } = Object;
const { toString } = objProto;

export const isDev = process.env.NODE_ENV !== 'production';

export const noop = () => {};

export const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop,
};

// eslint-disable-next-line no-console
export const error = isDev && console ? console.error : noop;

export function isEmptyElement(c) {
  return !(c.tag || (c.text && c.text.trim() !== ''));
}

export function filterEmpty(children = []) {
  return children.filter(c => !isEmptyElement(c));
}

export const isFunction = value => toString.call(value) === '[object Function]';

export const isArray = value => toString.call(value) === '[object Array]';

export default {};
