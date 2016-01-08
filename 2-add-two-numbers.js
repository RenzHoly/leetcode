function ListNode(val) {
    this.val = val;
    this.next = null;
}

var list2array = function (list) {
    var array = [];
    for (var i = 0; list; i++) {
        array[i] = list.val;
        list = list.next;
    }
    return array;
};

var array2list = function (array) {
    var list = new ListNode();
    var p = list;
    while (array.length > 1 && array[array.length - 1] === 0)
        array.pop();
    for (var i = 0; i < array.length; i++) {
        p.next = new ListNode(array[i]);
        p = p.next;
    }
    return list.next;
};

var max = function (a, b) {
    return a > b ? a : b;
};

var addTwoNumbers = function (l1, l2) {
    var array1 = list2array(l1);
    var array2 = list2array(l2);
    var result = [0];
    for (var i = 0; i < max(array1.length, array2.length); i++) {
        result[i] += (array1[i] || 0) + (array2[i] || 0);
        result[i + 1] = result[i] >= 10 ? 1 : 0;
        result[i] %= 10;
    }
    return array2list(result);
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
console.log(addTwoNumbers(new ListNode(0), new ListNode(0)));
