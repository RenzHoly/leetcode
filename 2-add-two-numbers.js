function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    var result = new ListNode(0);
    var p = result;
    while (l1 || l2) {
        p.val += ((l1 ? l1.val : 0) + (l2 ? l2.val : 0));
        if ((l1 && l1.next) || (l2 && l2.next) || p.val >= 10)
            p.next = new ListNode(p.val >= 10 ? 1 : 0);
        p.val %= 10;
        p = p.next;
        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
    }
    return result;
};

var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

var l3 = new ListNode(9);
l3.next = new ListNode(9);

var l4 = new ListNode(1);

var l5 = new ListNode(1);
l5.next = new ListNode(1);

console.log(addTwoNumbers(l1, l2));
console.log(addTwoNumbers(l3, l4));
console.log(addTwoNumbers(l3, l5));
