/**
 * Created by Hey on 9 Sep 2016
 */

// import the solution so that you can test anything exported out of it
import solution = require('../BrokenGreetings');
// import the type of assertion library you wish to use (Chai recommended)
import {assert} from 'chai'; // The expect and should assertion styles are also available

// DONE: TDD development by writing your own tests


describe("BrokenGreetings", function () {
    describe('solution', () => {
        describe('Person#greet(otherName: string): string', () => {
            it('returns the correct greeting', ()=>{
                assert.equal(new solution.Person("name").greet("otherName"), "Hi otherName, my name is name");
            }); // Write your tests here
        });

    });
});