function isObject(value) {
  let type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

export function deepMerge(src, target) {
  let key
  for (key in target) {
    src[key] = isObject(src[key])
      ? deepMerge(src[key], target[key])
      : (src[key] = target[key])
  }
  return src
}

export function getDynamicProps(props) {
  const ret = {}

  Object.keys(props).forEach((key) => {
    ret[key] = props[key]
  })

  return ret
}
