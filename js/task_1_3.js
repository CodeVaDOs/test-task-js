const mapObjectByProto = (obj, proto, _newObj = {}) => {
  for (const key in obj) {
    if (!proto) continue;

    if (proto[key] === null || proto[key]) {
      _newObj[key] = typeof obj[key] === 'object' ? {...obj[key]} : obj[key];
    } else delete _newObj[key];

    if (typeof _newObj[key] === 'object') mapObjectByProto(obj[key], proto[key], _newObj[key]);
  }
  return _newObj;
}


module.exports = {
  mapObjectByProto
}
