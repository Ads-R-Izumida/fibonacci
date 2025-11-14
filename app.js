'use strict';
const memo = new Map();

/**
 * フィボナッチ数列かトリボナッチ数列か選択する関数
 * @param {Number} n 数列の番号
 * @param {Number} func fib or trib
 * @returns 数列から抽出した値
 */
function fibtrib(n, func) {
  memo.set(0, 0);
  switch (func) {
    case "fib":
      memo.set(1, 1);
      return fib(n);
    case "trib":
      memo.set(1, 0);
      memo.set(2, 1);
      return trib(n);
    default:
      break;
  }
}

/**
 * フィボナッチ数列を出力する関数
 * @param {Number} n 数列の番号
 * @returns 数列から抽出した値
 */
function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}

/**
 * トリボナッチ数列を出力する関数
 * @param {Number} n 数列の番号
 * @returns 数列から抽出した値
 */
function trib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
  memo.set(n, value);
  return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(`${i}番目: ${fibtrib(i, "fib")}`);
}