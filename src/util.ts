// 日期格式化
export function dateFormat(date:Date|number,isPad?:boolean):dateFormatObj{
  const time = new Date(date)
  let year:number|string = time.getFullYear()
  let month:number|string = time.getMonth() + 1
  let day:number|string = time.getDate()
  let week:number|string = time.getDay()
  if(isPad){
    year = String(year).padStart(2,'0')
    month = String(month).padStart(2,'0')
    day = String(day).padStart(2,'0')
  }
  return {
    'year':year,
    'month':month,
    'day':day,
    'week':week
  }
}
// 防抖
export function debounces(fn:Function,time: number) {
  let timer = null;
  return function () {
    if(timer) clearTimeout(timer)
    timer = setTimeout(fn,time)
  }
}
// 节流
export function throttle(func:Function,delay:number){
  let prev = Date.now();//prev  = 1000
  return function(){
     let context = this;
     let args = arguments;
     let now = Date.now();//
     if(now - prev >= delay){
        func.apply(context,args);
        prev = Date.now();
     }
  }
}
