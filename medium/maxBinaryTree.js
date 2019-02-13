/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
 


// Root = Max node in Array
// root.left = highest node to the left, same for right 


var constructMaximumBinaryTree = function(nums) {
  let root = new TreeNode(nums[0]);

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > root.val) {
      // We have a new root
          let newNode = new TreeNode(nums[i]);
          newNode.left = root;
          root = newNode;
      } else {
          updateRight(root, nums[i]);
      }
  }
  // console.log(root.right)
  return root;
  
  function updateRight(parent, value) {
      console.log("Right", parent.right, "Value:", value);
      if (!parent.right){
          parent.right = new TreeNode(value);
      } else if( parent.right.val < value ) {
          let newNode = new TreeNode(value);
          newNode.left = parent.right;
          parent.right = newNode;
      } else {
          updateRight(parent.right, value);
      }
  }
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));