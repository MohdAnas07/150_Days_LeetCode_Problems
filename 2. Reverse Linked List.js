
var reverseList = function (head) {
    if (head === null) {
        return null
    }
    let prev = null;
    let cur = head;

    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    head = prev;
    return head
};