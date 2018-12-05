import * as chai from "chai";

const shouldLogToConsole = true;

describe("promise", function () {
    let logs = [];

    beforeEach(function () {
        resetLog();
    });

    it('test that promise is executed once created', function () {
        return promiseLogAndResolve("tried function")
            .then(() => new Promise(resolve => {
                pushToLog("executed once created");
                resolve();
            }))
            .then(() => assertLogInOrder(["promise returning tried function", "executed once created"]));
    });

    describe('should be able to notify using promise to fulfill Question 4', function () {
        // Reference: https://medium.com/appsflyer/unlocking-the-javascript-code-interview-an-interviewer-perspective-f4fe06246b29
        // Question 4: Write 2 functions, which receive an array of functions as an input, and notify using a promise,
        // when they are all complete. Each of the input functions returns a promise and resolves it when done.
        // Your first function should execute all the functions in the input array, without any importance for their order,
        // and the second one should execute each after the previous ended.
        // Both should notify its caller using a promise when they are done.

        const functions = [
            () => promiseLogAndResolve(0),
            () => waitAndLogAndResolve(200, 1),
            () => promiseLogAndResolve(2),
            () => waitAndLogAndResolve(400, 3),
            () => promiseLogAndResolve(4),
        ];

        it("should execute all", function () {
            // given
            function executeAll(fns) {
                return Promise.all(fns.map(fn => fn()));
            }

            // when
            // then
            return executeAll(functions).then(() => assertLog(["promise returning 0", "wait 1", "resolving after wait 1", "promise returning 2", "wait 3", "resolving after wait 3", "promise returning 4",]));
        });

        it('should execute sequentially', function () {
            // given
            function executeInOrder(fns) {
                return fns.reduce((promise, fn) => promise.then(fn), Promise.resolve());
            }

            // when
            // then
            return executeInOrder(functions).then(() => assertLog(["promise returning 0", "wait 1", "resolving after wait 1", "promise returning 2", "wait 3", "resolving after wait 3", "promise returning 4",]));
        });
    });

    function promiseLogAndResolve(val) {
        pushToLog(`promise returning ${val}`);
        return Promise.resolve(val);
    }

    function waitAndLogAndResolve(timeout, val) {
        pushToLog(`wait ${val}`);
        return new Promise(resolve => setTimeout(() => {
            pushToLog(`resolving after wait ${val}`);
            return resolve(val);
        }, timeout));
    }

    function resetLog() {
        logs = [];
    }

    function pushToLog(message) {
        logs.push(message);
        if (shouldLogToConsole){
            console.log(message)
        }

        return;
    }

    function assertLog(messages) {
        return chai.expect(logs).to.have.members(messages);
    }

    function assertLogInOrder(messages) {
        return chai.expect(logs).to.deep.equal(messages);
    }
});