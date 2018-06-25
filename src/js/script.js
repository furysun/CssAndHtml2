(function onLoad() {
    console.log('test');

    var s = 'cat';
    console.log(s);

    var a;
    console.log(a);

    var cat = {
        name: 'tom',
        age: 12,
        move: function () {
            return 'move';
        },
        move2: () => 'eat',

        eat: function (a) {
            return a;
        },
        eat2: (a) => a,

    };

    console.log(cat);
    console.log(cat.name);
    console.log(cat.move);
    console.log(cat.move());
    console.log(cat.move2());

    function print(x) {
        console.log(x);
    }

    print("mrr");

    function print1(value, action) {
        action(value);
    }

    print1("a",print);

    print1("b",function (a) {
        console.log(a);
    });
})();

function test() {
    console.log("mr");
}