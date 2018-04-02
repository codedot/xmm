"use strict";

const profit = (a, b) => {
	const r = Math.sqrt(a / b);

	return (r + 1 / r) / 2;
};
const ratio = (a, b) => Math.max(a, b) / Math.min(a, b);
const zigzag = prices => prices.reduce((res, price) => {
	res.ratio *= ratio(res.price, price);
	res.total *= profit(res.price, price);
	res.price = price;
	return res;
}, {
	ratio: 1,
	total: 1,
	price: prices[0]
});

module.exports = prices => {
	const res = zigzag(prices);
	const n = Math.max(prices.length - 1, 1);

	return {
		profit: res.total,
		spread: Math.pow(res.ratio, 1 / n)
	};
};
