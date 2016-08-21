/**
 * Created by Hey on 31 July 2016
 */
require.main.require('src/testMocha/javascript/testInfrastructure');
var Test = require('chai').assert;

//noinspection JSLint
var persistence = srcDirRequire(__dirname, 'PersistentBugger');

//noinspection JSUnresolvedFunction,JSLint
describe('PersistentBugger', function () {
    //noinspection JSLint
    describe('#Initial_Tests', function () {
        //noinspection JSLint
        it('should run Initial_Tests', function () {
            Test.equal(persistence(39), 3);
            Test.equal(persistence(4), 0);
            Test.equal(persistence(25), 2);
            Test.equal(persistence(999), 4);
        });
    });
});