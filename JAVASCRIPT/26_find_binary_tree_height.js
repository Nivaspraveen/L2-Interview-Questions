// 26. Finding height of a binary tree

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const findHeight = root => {
    if (root === null) return 0;
    let leftHeight = findHeight(root.left), rightHeight = findHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(6); 
root.left.left.left.left = new TreeNode(7);

console.log(findHeight(root));