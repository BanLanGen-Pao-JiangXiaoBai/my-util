var EventEmitter = function () {
    this.on = on;
    this.emit = emit;
    this.off = off;
    this.once = once;
    var ob = {};
    function on(e, fn) {
        if (ob[e]) {
            ob[e].push(fn);
        }
        else {
            ob[e] = [fn];
        }
    }
    function emit(e) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        ob[e].forEach(function (fn) {
            fn.apply(void 0, msg);
        });
    }
    function off(e, fn) {
        ob[e].splice(ob[e].indexOf(fn), 1);
    }
    function once(e, fn) {
        on(e, function (msg) {
            fn.apply(void 0, msg);
            off(e, fn);
        });
    }
};
// var Book = function() {
//     if(this instanceof Book) {
//         this.name = 'book'
//     }else {
//         return new Book()
//     }
// }
// var x = EventEmitterConstructor as EventEmitter
// var ee:EventEmitterObj = new EventEmitter()
// var f = function (text) {
//     console.log(text)
//     }
// ee.on('message', f)
// ee.emit('message', 'hello world')
// ee.off('message', f)
// ee.emit('message','heel')
// ee.once('x',f)
// ee.emit('x','x')
// ee.emit('x','x')
export { EventEmitter as EventBus };
