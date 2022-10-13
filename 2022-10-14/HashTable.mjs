import {DoublyLinkedList} from "../2022-10-13/DoublyLinkedList.mjs";

class HashData {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor() {
        this.arr = [];
        for (let i = 0; i < 10; i++) {
            this.arr[i] = new DoublyLinkedList();
        }
    }

    hashFunction(num) {
        return num % 10;
    }

    // 데이터 삽입
    set(key, value) {
        this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
    }

    // 데이터 읽기
    get(key) {
        let currentNode = this.arr[this.hashFunction(key)].head;
        while (currentNode !== null) {
            if (currentNode.data.key === key) {
                return currentNode.data.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    // 데이터 제거
    remove(key) {
        let list = this.arr[this.hashFunction(key)];
        let currentNode = list.head;
        let deletedIndex = 0;
        while (currentNode !== null) {
            if (currentNode.data.key === key) {
                return list.deleteAt(deletedIndex);
            }
            currentNode = currentNode.next;
            deletedIndex++;
        }
        return null;
    }
}

export {HashTable};
