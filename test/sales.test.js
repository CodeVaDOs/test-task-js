const {getSales} = require('../task_1_2');


test("test getSales function (sort by Ascending)", () => {
  const src = [
    {amount: 10000, quantity: 10},
    {amount: 1000, quantity: 15},
    {amount: 500, quantity: 13},
    {amount: 14000, quantity: 5},
  ]

  const result = [
    {amount: 500, quantity: 13, Total: 6500},
    {amount: 1000, quantity: 15, Total: 15000},
    {amount: 14000, quantity: 5, Total: 70000},
    {amount: 10000, quantity: 10, Total: 100000},
  ]

  expect(getSales(src, true)).toStrictEqual(result)
})


test("test getSales function (sort by Descending)", () => {
  const src = [
    {amount: 10000, quantity: 10},
    {amount: 1000, quantity: 15},
    {amount: 500, quantity: 13},
    {amount: 14000, quantity: 5},
  ]

  const result = [
    {amount: 10000, quantity: 10, Total: 100000},
    {amount: 14000, quantity: 5, Total: 70000},
    {amount: 1000, quantity: 15, Total: 15000},
    {amount: 500, quantity: 13, Total: 6500},
  ]

  expect(getSales(src, false)).toStrictEqual(result)
})
