const util = require('util')
const {mapObjectByProto} = require("./task_1_3");

const src = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32
    }
  },
  prop12: 12
};

const proto = {
  prop11: {
    prop22:null
  },
  prop12: null
};

console.log("src: (перед обработкой)", util.inspect(src));

const result = mapObjectByProto(src, proto);

console.log("src: (после обработки)", util.inspect(src));
console.log("result: (после обработки)", util.inspect(result));
