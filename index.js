const util = require('util')
const {mapObjectByProto} = require("./task_1_3");

const src1 = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32
    }
  },
  prop12: 12
}

const proto1 = {
  prop11: {
    prop22: null
  },
  prop12: null
}

console.log("1. BEFORE:", util.inspect(src1, false, null, true))
mapObjectByProto(src1, proto1)
console.log("1. AFTER:", util.inspect(src1, false, null, true))
console.log("1. PROTO:", util.inspect(proto1, false, null, true))


const src2 = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32
    }
  },
  prop12: 12,
  prop13: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: {
        prop41: 41,
        prop42: 42
      }
    }
  }
}

const proto2 = {
  prop11: {
    prop22: {
      prop32: null
    },
  },
  prop13: {
    prop22: {
      prop31: null,
      prop32: {
        prop42: null
      }
    }
  }
}

console.log('-------------------------------------------');

console.log("\n2. BEFORE:", util.inspect(src2, false, null, true))
mapObjectByProto(src2, proto2)
console.log("2. AFTER:", util.inspect(src2, false, null, true))
console.log("2. PROTO:", util.inspect(proto2, false, null, true))


const src3 = {
  prop11: 11,
  prop12: 12,
  prop13: {
    prop21: 21,
    prop22: {
      prop31: 31
    }
  }
}

const proto3 = {
  prop11: {
    prop22: {
      prop31: null,
      prop32: null
    },
  },
  prop13: {
    prop22: {
      prop31: null,
      prop32: {
        prop42: null
      }
    }
  }
}

console.log('-------------------------------------------');

console.log("\n3. BEFORE:", util.inspect(src3, false, null, true))
mapObjectByProto(src3, proto3)
console.log("3. AFTER:", util.inspect(src3, false, null, true))
console.log("3. PROTO:", util.inspect(proto3, false, null, true))
