var isPalindrome = function (head) {
    let list = []
    while (head) {
        list.push(head.val);
        head = head.next;
    }

    let front = 0;
    let rear = list.length - 1;
    while (front < rear) {
        if (list[front] !== list[rear]) return false
        front++, rear--;
    }
    return true;
};