import * as chai from "chai";

import {createList} from "./utils/ListNode";
import middleNode from "../../../../main/typescript/online/leetcode/876_Middle_of_the_Linked_List";

describe("876. Middle of the Linked List", function () {
    describe('should return middle node of linked list', function () {
        [
            {
                input: createList([1, 2, 3, 4, 5]),
                output: createList([3, 4, 5]),
            },
            {
                input: createList([1, 2, 3, 4, 5, 6]),
                output: createList([4, 5, 6]),
            },
        ].forEach(({input, output}) =>
            it(`middleNode(${JSON.stringify(input)})=${JSON.stringify(output)}`, function () {
                // given
                // when
                let actual = middleNode(input);

                // then
                while (output != null) {
                    chai.expect(actual.val).to.deep.equal(output.val);
                    actual = actual.next;
                    output = output.next;
                }
            })
        );
    });
});