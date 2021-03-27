const getSales = (arr, isAscending = true) => {
  return arr
    .map(item => ({...item, Total: item.amount * item.quantity}))
    .sort((a, b) => (a.Total - b.Total) * (isAscending ? 1 : -1));
}

module.exports = {
  getSales
}
