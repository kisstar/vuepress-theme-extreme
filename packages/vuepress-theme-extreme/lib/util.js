export const isDev = process.env.NODE_ENV !== 'production';

export const endingSlashRE = /\/$/;

export const outboundRE = /^[a-z]+:/i;

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

export function transformer(timestamp, lang) {
  return new Date(timestamp)
    .toLocaleDateString(lang, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    .replace(/\//g, '-');
}

export default {};
