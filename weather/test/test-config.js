var assert = require('assert'),
    config = require('./../lib/config');


// set values 
var units = {
        u1: 1,
        u2: 2,
    },
ip = '8080';

var Config = config(units, ip);


describe('Config', function () {
    it('has 3 props', function() {
    assert(Object.keys(Config).length === 3);
  });

    it('after construction, 2 props are populated',  function () {
       assert(typeof(Config.units) != units);
       assert(typeof(Config.ip) != ip);
   
    })

    it('has correct key types', function () {
        Object.keys(Config).forEach(function (key) {
            assert(typeof(key) === 'object' || typeof(key) === 'string');
        })
    });
});