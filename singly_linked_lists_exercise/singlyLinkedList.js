function Node(val){
    this.val = val;
    this.next = null;
}

function SinglyLinkedList(array = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if(Array.isArray(array)){
        array.forEach(el => {
            this.push(el);
        });
    }
}

SinglyLinkedList.prototype.push = function(val) {
   let newNode = new Node(val);

   if(this.head === null){
        this.head = newNode;
        this.tail = this.head;
   }else{
       this.tail.next = newNode;
       this.tail = newNode;
   }

   this.length++;

   return this;
}

SinglyLinkedList.prototype.unshift = function(val){
    let newNode = new Node(val);

    if(this.head === null){
        this.head = newNode;
        this.tail = this.head;
    }else{
        newNode.next = this.head;
        this.head = newNode;
    }

    this.length++;

    return this;
}


SinglyLinkedList.prototype.insert = function(index, val) {
    if(index < 0 || index >= this.length){
        return undefined;
    }
    
    let newNode = new Node(val);

    let currentNode = this.head;
    let counter = 0;
    while(currentNode){
        if(counter === index  - 1){
            break;
        }
        counter++;
        currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;

    this.length++;

    return this.length;
}

SinglyLinkedList.prototype.getNode = function(index){
    if(index < 0 || index >= this.length){
        return undefined;
    }

    let currentNode = this.head;
    let counter = 0;
    while(currentNode){
        if(counter === index){
            break;
        }
        counter++;
        currentNode = currentNode.next;
    }

    return currentNode;
}

SinglyLinkedList.prototype.get = function(index) {
    
    let node = this.getNode(index);

    return node ? node.val : null;
}

SinglyLinkedList.prototype.set = function(index, val) {
    let node = this.getNode(index);
    
    if(node){
        node.val = val;
        return true;
    }

    return false;
}

SinglyLinkedList.prototype.shift = function() {

    if(!this.head){
        return undefined;
    }

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;

    this.length--;


    return temp.val;

}

SinglyLinkedList.prototype.remove = function(index){
    if(index < 0 || index >= this.length){
        return undefined;
    }

    let removedNode = null;

    if(this.length === 1){
        removedNode = this.shift();
    }else{
        let previousNode = this.getNode(index - 1);
        removedNode = previousNode.next;
        previousNode.next = previousNode.next.next;
        removedNode.next = null;
    }

    this.length--;

    return removedNode;

}

SinglyLinkedList.prototype.pop = function() {
    let node = this.remove(this.length - 1);
    return node ? node.val : undefined;
}


SinglyLinkedList.prototype.reverse = function() {
    const currentNode = this.head
    this.head = this.tail
    this.tail = currentNode

    for(let i = 0 ; i<this.length ; i++){
        const next = currentNode.next.next
        const prev = currentNode.next

        currentNode.prev = next
        currentNode.next = prev
        currentNode = next;
    }
    return this;
}