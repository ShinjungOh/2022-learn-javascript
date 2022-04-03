class Counter {
    counter;
    constructor(runEvery5Times) {
        this.counter = 0;
        this.callback = runEvery5Times;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            if(this.callback) {  // = this.callback && this.callback(this.counter);
                this.callback(this.counter);
            }
        }
    }
}

function printSomething(num) {
    console.log(`check! ${num}`);
}

function alertNum(num) {
    alert(`alert! ${num}`);
}

const printCounter = new Counter(printSomething);
const coolCounter = new Counter(alertNum);
