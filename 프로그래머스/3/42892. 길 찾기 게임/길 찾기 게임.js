class BinaryTree {
    constructor(value, xPos) {
        this.value = value;
        this.xPos = xPos;
        this.left = null;
        this.right = null;
    }  
    
    insert(value, xPos) {
        if(xPos < this.xPos) {
            this.toLeft(value, xPos);
        }
        else {
            this.toRight(value, xPos);
        }
    }
    
    toLeft(value, xPos) {
        if(this.left) {
            this.left.insert(value, xPos);
        }
        else {
            this.left = new BinaryTree(value, xPos);
        }
    }
    
    toRight(value, xPos) {
        if(this.right) {
            this.right.insert(value, xPos);
        }
        else {
            this.right = new BinaryTree(value, xPos);
        }
    }
}

function preorder(tree, arr) {
    if(tree) {
        arr.push(tree.value);
        preorder(tree.left, arr);
        preorder(tree.right, arr);
    }
}

function postorder(tree, arr) {
    if(tree) {
        postorder(tree.left, arr);
        postorder(tree.right, arr);
        arr.push(tree.value);
    }
}

function solution(nodeinfo) {
    const nodes = nodeinfo.map((node, index) => [index+1, ...node]).sort((a, b) => b[2] - a[2]);
    const tree = new BinaryTree(nodes[0][0], nodes[0][1]);
    
    for(let i = 1; i < nodes.length; i++) {
      tree.insert(nodes[i][0], nodes[i][1]);
    }

    const result = [[], []];
    preorder(tree, result[0]);
    postorder(tree, result[1]);

    return result;

}