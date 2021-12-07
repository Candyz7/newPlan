function test() {
    console.log("这里的this指向", this)
}

test();

test.call({name: '欧文'});
test.apply({name: '欧文'});