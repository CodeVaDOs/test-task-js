const mapObjectByProto = (obj, proto) => {
  for (const key in obj) {
    if (proto[key] === null) continue;
    if (!proto[key]) delete obj[key];
    else if (typeof obj[key] === 'object') mapObjectByProto(obj[key], proto[key]);
  }
}

module.exports = {
  mapObjectByProto
}
