const {Date} = require('../task_1_1')

test('DateTo: from 2021.03 to 2021.04', () => {
  const d1 = new Date(2021, 3);
  const d2 = new Date(2021, 4);

  expect(d1.dateTo(d2)).toBe(30);
})

test('DateTo: from 2020.03 to 2021.03', () => {
  const d1 = new Date(2020, 3);
  const d2 = new Date(2021, 3);

  expect(d1.dateTo(d2)).toBe(365);
})

test('DateTo: from 2019.03 to 2020.03', () => {
  const d1 = new Date(2019, 3);
  const d2 = new Date(2020, 3);

  expect(d1.dateTo(d2)).toBe(366);
})
