class Node{
    constructor(value,index){
        this.value = value;
        this.index = index;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let node = new Node(value,this.length);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            node.next = this.head;
            this.head.prev = node;
            this.tail = node;
        }
        this.length++;
    }

    get(index){
        let cnt = 0;
        let current = this.head;
        while(cnt !== index){
            current = current.next;
            cnt++
        }
        return current.value;
    }
}



function PalindromeLinkedList(str){
    let linkedList = new DoubleLinkedList()
    for(let i=0; i<str.length; i++){
        linkedList.push(str[i])
    }

    let i=0;
    let j = str.length-1;

    while(i<j){
        if(linkedList.get(i) !== linkedList.get(j)){
            return false;
        }
        i++;
        j--;
    }

    return true;
}


console.log(PalindromeLinkedList('arora'));
console.log(PalindromeLinkedList('sanjay'));
console.log(PalindromeLinkedList('amirneni'));
console.log(PalindromeLinkedList('vikattakiv'));