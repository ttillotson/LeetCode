// Time: O(n)
// Space: O(1)
var addTwoNumbers = function(l1, l2) {
    let carry = false;
    let l1List = [];
    let l2List = [];
    while (true) {
        if (l1 !== null) {
            l1List.push(l1.val);
            l1 = l1.next;
        } else {
            l1List.push(0);
        }
        if (l2 !== null) {
            l2List.push(l2.val);
            l2 = l2.next;
        }  else {
            l2List.push(0);
        }
        if (l1 === null && l2 === null) break;
    }

    let sum = [];
    for (let i = 0; i < l1List.length; i++) {
        let val = l1List[i] + l2List[i];
        if (carry) {
            carry = false;
            val += 1;
        }
        if (val > 9) {
            carry = true;
            val %= 10;
        }
        sum.push(val);
    }
    if (carry) sum.push(1);
    return sum;
};