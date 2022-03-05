function Node(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(array = []){
    this.head = null;
    this.tail = null;
    this.length = 0;

    if(Array.isArray(array)){
        array.forEach(el => {
            this.push(el);
        });
    }
}

DoublyLinkedList.prototype.push = function(val){
    const node = new Node(val)
    if(!this.head){
        this.head = node
        this.tail = node
    }
    let temp = this.tail // current tail 
    this.tail = node // new node 
    node.prev = temp // prev node is temp
    temp.next = node // next of temp is the new node 

    this.length ++; // increments the length
    return this; // return list
}

DoublyLinkedList.prototype.unshift = function(val){
    const node = new Node(val)
    if(!this.head){
        this.head = node
        this.tail = node
    }
    const temp = this.head
    this.head = node
    node.next = temp;
    node.prev = null;

    this.length ++
    return this
}

DoublyLinkedList.prototype.insert = function(index, val){
    if(index < 0 || index >= this.length) return undefined

    const node = new Node(val)
    let current = this.head;
    let counter = 0;
    
    while(current){
        if(counter == index -1){
            break;
        }
        // current.prev = current
        current = current.next;
        counter ++
    }
    node.next = current.next;
    current.next = node;
    this.length ++

    return this.length;
}


DoublyLinkedList.prototype.getNode = function(index){
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

DoublyLinkedList.prototype.get = function(index){
    
    let node = this.getNode(index);

    return node ? node.val : null;
}

DoublyLinkedList.prototype.set = function(index, val){
    let node = this.getNode(index);
    
    if(node){
        node.val = val;
        return true;
    }

    return false;
}

DoublyLinkedList.prototype.pop = function(){
    let removedNode = null;
    let temp = this.tail

    if(this.length === 0) return undefined
    if(this.length === 1){
        this.head = null
        this.tail = null
    }else{
        this.tail = temp.prev
        this.tail.next = null
        temp.prev = null
        removedNode = temp
    }
    this.length--;
    return removedNode.val;
}

DoublyLinkedList.prototype.shift = function(){
    if(!this.head){
        return undefined;
    }

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;

    this.length--;


    return temp.val;
}

DoublyLinkedList.prototype.remove = function(index){
    let removedNode = null
    if(index < 0 || index >= this.length) return undefined

    if(this.length === 1) removedNode = this.shift();
    else{
        let previousNode = this.getNode(index -1)
        removedNode = previousNode.next
        previousNode.next = previousNode.next.next
        removedNode.next = null
    }
    this.length--;
    return removedNode;
}

DoublyLinkedList.prototype.reverse = function(){
    if(!this.head) return undefined

    let currentNode = this.head;
    this.head = this.tail; // reassign head
    this.tail = currentNode; // reassign tail

    for(let i = 0 ; i< this.length ; i++){
        const {next,prev} = currentNode;

        currentNode.prev = next
        currentNode.next = prev
        currentNode = next;
    }
    return this;
}

let list = new DoublyLinkedList();
console.log(list);
