interface dateFormatObj {
  'year':number|string,
  'month':number|string,
  'day':number|string,
  'week':number|string
}
interface EventEmitterObj{
  on:(event:string,fn:function) => void,
  emit:(event:string,...arg:any[]) => void,
  off:(event:string,fn:function) => void,
  once:(event:string,fn:function) => void,
}
interface EventEmitter {
  ():EventEmitterObj,
  new ():EventEmitterObj,
}
