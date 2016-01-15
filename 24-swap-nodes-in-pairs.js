function ListNode(val) {
    this.val = val;
    this.next = null;
}

var swapPair = function (head, a, b) {
    var temp = b.next;
    b.next = a;
    a.next = temp;
    head.next = b;
};

var swapPairs = function (head) {
    var p = new ListNode();
    p.next = head;
    var result = p;
    while (p) {
        try {
            swapPair(p, p.next, p.next.next);
            p = p.next.next;
        } catch (e) {
            return result.next;
        }
    }
    return result.next;
};

var l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);

console.log(swapPairs(l));