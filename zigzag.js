#!/usr/bin/env node

"use strict";

const zigzag = require(".");

const arg = process.argv.pop();
const json = `[${arg}]`;
const prices = JSON.parse(json);
const res = zigzag(prices);

console.info(res);
