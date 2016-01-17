'use strict';

/*!
 * opti
 * @license MIT
 */

/*
 * Module
 */

/**
 * Select partials of an Array and return the selection as a new Array.
 * Optionally use `left padding` and `right padding`.
 *
 * This method is commonly used to transform a method's arguments into
 * an Array object.
 *
 * The original Array will remain intact.
 *
 * Examples:
 *
 * // arguments === ['a', 'b', 'c'];
 *
 * toArray(arguments);       → ['a', 'b', 'c']
 * toArray(arguments, 1);    → ['b', 'c']
 * toArray(arguments, 0, 1); → ['a', 'b']
 * toArray(arguments, 1, 1); → ['b']
 *
 * @param  {Array/Arguments} target - The target of the selection.
 * @param  {Integer} [left] - Left start of selection. Default 0.
 * @param  {Integer} [right] - Right end of selection. Default 0.
 * @return {Array} A new Array as result of the selection.
 */
function toArray(target, left, right) {
  var len = target.length;
  switch (arguments.length) {
    case 1:
      left = 0;
    case 2:
      right = 0;
      break;
  }
  len = len - left - right;
  if (len <= 0) return new Array();
  var res = new Array(len);
  for (var i = 0; i < len; i++) { // ++i
    res[i] = target[i + left];
  }
  return res;
}

/**
 * Call a method applying arguments and context.
 *
 * Examples:
 *
 * function fn(a, b, c) {
 *   // logic
 * }
 *
 * fnApply(fn, null, ['a', 'b', 'c']);
 *
 * @param  {Function} fn - The target method
 * @param  {Mixed} ctx - The context
 * @param  {Array/Arguments} - The arguments to apply
 */
function fnApply(fn, ctx, args) {
  switch (args.length) {
    case 0:
      fn.call(ctx);
      break;
    case 1:
      fn.call(ctx, args[0]);
      break;
    case 2:
      fn.call(ctx, args[0], args[1]);
      break;
    case 3:
      fn.call(ctx, args[0], args[1], args[2]);
      break;
    case 4:
      fn.call(ctx, args[0], args[1], args[2], args[3]);
      break;
    case 5:
      fn.call(ctx, args[0], args[1], args[2], args[3], args[4]);
      break;
    case 6:
      fn.call(ctx, args[0], args[1], args[2], args[3], args[4], args[5]);
      break;
    case 7:
      fn.call(ctx, args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
      break;
    case 8:
      fn.call(ctx, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
      break;
    case 9:
      fn.call(ctx, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
      break;
    default:
      fn.apply(ctx, args);
  }
}

/*
 * Module exports
 */

exports.toArray = toArray;
exports.fnApply = fnApply;
