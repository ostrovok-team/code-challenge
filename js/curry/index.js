Function.prototype.curry = function(...args) {
	const curry = (fn, ...args) =>
  		(fn.length <= args.length)
			? fn(...args)
    		: (...more) => curry(fn, ...args, ...more);

	return curry(this, ...args);
}

function abc(a, b, c) {
  return a + b + c;
}

function abcdef(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

function assert (a, b) {
  if (a !== b) {
    throw new Error();
  }
}
assert(abc.curry('A', 'B', 'C'), 'ABC');
assert(abc.curry('A')('B')('C'), 'ABC');
assert(abc.curry('A', 'B')('C'), 'ABC');
assert(abcdef.curry('A')('B')('C')('D')('E')('F'), 'ABCDEF');
assert(abcdef.curry('A', 'B', 'C')('D', 'E', 'F'), 'ABCDEF');
