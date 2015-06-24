export default function eventAttrToPromise (obj, resolveAttr) {
  return new Promise((resolve, reject) => {
    obj['on' + resolveAttr] = event => resolve(event);
    obj.onerror = event => reject(event);
  });
}
