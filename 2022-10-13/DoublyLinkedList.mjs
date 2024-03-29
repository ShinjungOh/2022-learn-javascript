class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    // 모든 데이터 출력
    printAll() {
        let currentNode = this.head;
        let text = "[";

        while (currentNode !== null) {
            text += currentNode.data;
            currentNode = currentNode.next;

            if (currentNode !== null) {
                text += ", ";
            }
        }

        text += "]";
        console.log(text);
    }

    // 모든 데이터 제거
    clear() {
        this.head = null;
        this.count = 0;
    }

    // 인덱스 삽입
    insertAt(index, data) {
        if (index < 0 || index > this.count) {
            throw new Error("범위를 벗어났습니다.");
        }

        let newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            if (this.head !== null) {
                this.head.prev = newNode;
            }
            this.head = newNode;
        } else if (index === this.count) {
            newNode.next = null;
            newNode.prev = this.tail;
            this.tail.next = newNode;
        } else {
            let currentNode = this.head;

            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            newNode.prev = currentNode;
            currentNode.next = newNode;
            newNode.next.prev = newNode;
        }

        if (newNode.next === null) {
            this.tail = newNode;
        }
        this.count++;
    }

    // 마지막 삽입
    insertLast(data) {
        this.insertAt(this.count, data);
    }

    // 인덱스 삭제
    deleteAt(index) {
        if (index < 0 || index > this.count) {
            throw new Error("제거할 수 없습니다.");
        }

        let currentNode = this.head;

        if (index === 0) {
            let deleteNode = this.head;
            if (this.head.next === null) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.count--;
            return deleteNode;
        } else if (index === this.count - 1) {
            let deletedNode = this.tail;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.count--;
            return deletedNode;
        } else {
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            currentNode.next.prev = currentNode;
            this.count--;
            return deleteNode;
        }
    }

    // 마지막 삭제
    deleteLast() {
        return this.deleteAt(this.count - 1);
    }

    // 인덱스 읽기
    getNodeAt(index) {
        if (index < 0 || index > this.count) {
            throw new Error("범위를 벗어났습니다.");
        }

        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

export {Node, DoublyLinkedList};
