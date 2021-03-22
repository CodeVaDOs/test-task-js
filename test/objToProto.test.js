const {mapObjectByProto} = require('../task_1_3');

test("Object by proto test with example source", () => {
  const src = {
    prop11: {
      prop21: 21,
      prop22: {
        prop31: 31,
        prop32: 32
      }
    },
    prop12: 12
  }

  const proto = {
    prop11: {
      prop22: null
    },
    prop12: null
  }

  const result = {
    prop11: {
      prop22: {
        prop31: 31,
        prop32: 32
      }
    },
    prop12: 12
  }

  mapObjectByProto(src, proto)

  expect(src).toStrictEqual(result);
})

test("Object by proto test 2", () => {
  const src = {
    prop11: {
      prop21: 21,
      prop22: {
        prop32: 32
      }
    },
    prop12: 12,
    prop13: 13
  }

  const proto = {
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

  const result = {
    prop11: {
      prop22: {
        prop32: 32
      }
    },
    prop13: 13
  }

  mapObjectByProto(src, proto)

  expect(src).toStrictEqual(result);
})

test("Object by proto test 3", () => {
  const src = {
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

  const proto = {
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

  const result = {
    prop11: {
      prop22: {
        prop32: 32
      }
    },
    prop13: {
      prop22: {
        prop31: 31,
        prop32: {
          prop42: 42
        }
      }
    }
  }

  mapObjectByProto(src, proto)

  expect(src).toStrictEqual(result);
})
