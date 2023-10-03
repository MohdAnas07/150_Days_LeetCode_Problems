// Unsing Array Memory O(n)
var hasCycle = function (head) {
    let visited = [];
    while (head) {
        if (visited.includes(head)) return true;
        visited.push(head);
        head = head.next
    }
    return true;

};

// without using memory O(1);
var hasCycle = function (head) {
    let fast = head;
    while (fast && fast.next) {
        head = head.next;
        fast = fast.next.next;
        if (fast === head) return true;
    }
    return false;
};
