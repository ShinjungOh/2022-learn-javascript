import {LinkedList} from '../2022-10-11/LinkedList.mjs';

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    // 데이터 삽입
    push(data) {
        this.list.insertAt(0, data);
    }

    // 데이터 제거
    pop() {
        try {
            return this.list.deleteAt(0);
        } catch (e) {
            return null;
        }
    }

    // 데이터 참조
    peek() {
        return this.list.getNodeAt(0);
    }

    // 비었는지 체크
    isEmpty() {
        return (this.list.count === 0);
    }
}

export { Stack };
