const EventEmitter = function (){
  this.on = on
  this.emit = emit
  this.off = off
  this.once = once
  var ob = {
      
  }
  function on(e:string,fn:Function){
    if(ob[e]){
        ob[e].push(fn)
    } else {
        ob[e] = [fn]
    }
  }
  function emit(e:string,...msg:any[]) {
      ob[e].forEach((fn)=>{
          fn(...msg)
      })
  }
  function off(e:string,fn:Function){
      ob[e].splice(ob[e].indexOf(fn),1)
  }
  function once(e:string,fn:Function){
      on(e,(msg)=>{
          fn(...msg)
          off(e,fn)
      })
  }
} as EventEmitter

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
export {
  EventEmitter as EventBus
}


