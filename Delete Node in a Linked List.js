var deleteNode = function (node) {
    node.val = node.next.val; //copy next node value to curr value
    node.next = node.next.next; // and now connect the current node to next ot next node.
};