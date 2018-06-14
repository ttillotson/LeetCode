// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.
//       currentNode:    2->3->4->5
//     behindNthNode:          1
//       nDistance:      0->1->2

// After removing the second node from the end, the linked list becomes 1->2->3->5.

const removeNthFromEnd = function(head, n) {
    let behindNthNode;
    let currentNode = head;
    let nDistance = 0;
    while (currentNode) {
        if (nDistance === n) behindNthNode = head;
        if (nDistance > n) behindNthNode = behindNthNode.next;
        currentNode = currentNode.next;
        nDistance += 1;
    }
    if (nDistance === n) return head.next;
    if (behindNthNode) behindNthNode.next = behindNthNode.next.next;
    return head;
};