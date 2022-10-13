import {DoublyLinkedList} from "./DoublyLinkedList.mjs";

class Deque {
    constructor() {
        this.list = new DoublyLinkedList();
    }

    // 모든 데이터 출력
    printAll() {
        this.list.printAll();
    }

    // head에 데이터 삽입
    addFirst(data) {
        this.list.insertAt(0, data);
    }

    // head에서 데이터 삭제
    removeFirst() {
        return this.list.deleteAt(0);
    }

    // tail에 데이터 삽입
    addLast(data) {
        this.list.insertAt(this.list.count, data);
    }

    // tail에서 데이터 삭제
    removeLast() {
        return this.list.deleteLast();
    }

    // 비었는지 체크
    isEmpty() {
        return (this.list.count === 0);
    }
}

export {Deque};
