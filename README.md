```node
npm install dml-util -s
```
# debounces
返回一个防抖函数 参数为包装函数fn,毫秒数time
# throttle 
返回一个节流函数 参数为fn,time  
# dateFormat (date:number|Date,ispad?:boolean)
日期格式化工具 ispad 是否格式化为俩位数
# EventBus 
```ts
let bus:EventEmitterObj = new EventBus()
bus.on(observerName,fn)
bus.emit(observerName,arg)
```