var assert = require('assert'),
    format = require('./../lib/format');


// assert would throw an error if it's not a function
describe('format', function () {
    it('is a constructor of the Format object', function () {
        assert(typeof(format) === 'function');
	});
});

