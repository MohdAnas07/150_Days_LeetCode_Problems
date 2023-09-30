var mergeTwoLists = function (list1, list2) {

    // just adding extra node infront of linkedlist
    let head = new ListNode(0, null);
    let temp = head;

    // untile one of lists is not empty;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }

    // left node to this current list
    temp.next = list1 || list2;

    // return next of head excluding extra infront node
    return head.next;

};