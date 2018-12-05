describe("promise", function () {
    it('test that promise is executed once created', function (done) {
        promiseLogAndResolve("tried function");
        new Promise(resolve => {
            console.log("executed once created");
            resolve();
        });

        done();
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
            () => waitAndLogAndResolve(200,1),
            () => promiseLogAndResolve(2),
            () => waitAndLogAndResolve(400,3),
            () => promiseLogAndResolve(4),
        ];

        it("should execute all", function () {
            // given
            function executeAll(fns) {
                return Promise.all(fns.map(fn => fn()));
            }

            // when
            // then
            return executeAll(functions);
        });
        it('should execute sequentially', function () {
            // given
            function executeInOrder(fns) {
                return fns.reduce((promise, fn) => promise.then(fn), Promise.resolve());
            }

            // when
            // then
            return executeInOrder(functions);
        });
    });

    function promiseLogAndResolve(val) {
        console.log(`promise returning ${val}`);
        return Promise.resolve(val);
    }

    function waitAndLogAndResolve(timeout, val) {
        console.log(`wait ${val}`);
        return new Promise(resolve => setTimeout(() => {
            console.log(`resolving after wait ${val}`);
            return resolve(val);
        }, timeout));
    }
});