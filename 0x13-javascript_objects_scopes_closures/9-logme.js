#!/usr/bin/node
let numOfCount = 0;
exports.logMe = function (item) { console.log(`${numOfCount++}: ${item}`); };
