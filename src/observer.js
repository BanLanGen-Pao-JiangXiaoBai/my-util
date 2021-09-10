//line=readline()
//print(line)
function EventEmitter(){
  this.on = on
  this.emit = emit
  this.off = off
  this.once = once
    ob = {
      
  }
  function on(e,fn){
    if(ob[e]){
        ob[e].push(fn)
    } else {
        ob[e] = [fn]
    }
  }
  function emit(e,...msg) {
      ob[e].forEach((fn)=>{
          fn(...msg)
      })
  }
  function off(e,fn){
      ob[e].splice(ob[e].indexOf(fn),1)
  }
  function once(e,fn){
      on(e,(msg)=>{
          fn(...msg)
          off(e,fn)
      })
  }
}
var ee = new EventEmitter()
var f = function (text) {
    console.log(text)
    }
ee.on('message', f)

ee.emit('message', 'hello world')
ee.off('message', f)
ee.emit('message','heel')
ee.once('x',f)
ee.emit('x','x')
ee.emit('x','x')


