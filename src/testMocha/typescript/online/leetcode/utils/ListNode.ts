function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createList(arr: any[]): typeof ListNode {
    if (arr.length === 0) {
        return null;
    }

    let head = new ListNode(arr[0]);
    arr.slice(1).reduce((node, val) => {
        node.next = new ListNode(val);
        return node.next;
    }, head);
    return head;
}

export {ListNode, createList};