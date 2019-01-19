describe("generic functions", function () {
    it("should not give transpilation error", function () {
        // given
        function myFunction<T>(arr: T[]): T[] {
            arr.forEach(console.log);
            return arr;
        }

        let arrays = [
            ["a"],
            [1]
        ];

        // these are ok
        myFunction(["b"]);
        myFunction([2]);
        arrays.map(myFunction);
        arrays.map(arr => myFunction<string | number>(arr)); // reference: https://stackoverflow.com/a/54250121/10734272

        // this give error?
        arrays.map(arr => myFunction(arr));
    });
});