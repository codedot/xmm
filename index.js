"use strict";

const mean = (a, b) => (a + b) / 2;
const geomean = (a, b) => Math.sqrt(a * b);
const profit = (a, b) => mean(a, b) / geomean(a, b);
const zigzag = prices => prices.reduce((res, price) => {
	res.total *= profit(res.price, price);
	res.price = price;
	return res;
}, {
	total: 1,
	price: prices[0]
}).total;

module.exports = zigzag;
