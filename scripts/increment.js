class Increment {
    constructor (i = 0) {
        this.i = i;
    }
    toString() {
        return ++this.i;
    }
}

const increment = new Increment(0);

alert(increment); // 1
alert(increment); // 2

alert(increment + increment); // 7
