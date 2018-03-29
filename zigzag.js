#!/usr/bin/env node

"use strict";

const zigzag = require(".");

const arg = process.argv.pop();
const json = `[${arg}]`;
const prices = JSON.parse(json);
const res = zigzag(prices);
let profit = res.profit;
let spread = res.spread;

profit = 1e4 * (profit - 1);
profit = profit.toFixed(2);
profit = `${profit}bp`;
console.info("profit", profit);

spread = 100 * (spread - 1);
spread = spread.toFixed(2);
spread = `${spread}%`;
console.info("spread", spread);
