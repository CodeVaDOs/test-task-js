Date.prototype.dateTo = function (d2) {
  const diff = d2.getTime() - this.getTime();
  return Math.floor(diff / 1000 / 60 / 60 / 24);
}


module.exports = {
  Date
};
