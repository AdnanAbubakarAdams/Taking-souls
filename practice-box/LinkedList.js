function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {
   let count = 0;
    let currNode = head;
    while(currNode) {
      count++;
      currNode = currNode.next
    }
    return count;
  }
  
  function count(head, data) {
    let count = 0;
    let currNode = head;
    while(currNode) {
      if (currNode.data === data) {
      count++;
    }
      currNode = currNode.next;
    }

    return count;
  };
//   console.log(Node(1 -> 2 -> 3 -> null, 1))

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}




class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function push(head, data) {
    const newNode = new Node(data);
    newNode.next = head
    return newNode
  }
  
  
  function buildOneTwoThree() {
    var chained = null
  chained = push(chained, 3)
  chained = push(chained, 2)
  chained = push(chained, 1)
    return chained
  }

  function Node(data) {
    this.data = data;
    this.next = null;
  }
  function pusher(head, data) {
    let node = new Node(data);
    node.next = head || null;
    return node;
  }
  function build123(length = 3) {
    // create a new node with data of 3
    // let node = new Node(3)
    // create a new node with data of 2 that points to the above node
    // create a new node with data of 1 that points to the previous node
    // return the node with data of 1


    while(length > 0) {
        head = null;
        node = push(length, head);
        length--;
    }
    
    return node;
  }