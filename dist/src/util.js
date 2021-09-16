// 日期格式化
export function dateFormat(date, isPad) {
    var time = new Date(date);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var week = time.getDay();
    if (isPad) {
        year = String(year).padStart(2, '0');
        month = String(month).padStart(2, '0');
        day = String(day).padStart(2, '0');
    }
    return {
        'year': year,
        'month': month,
        'day': day,
        'week': week
    };
}
// 防抖
export function debounces(fn, time) {
    var timer = null;
    return function () {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(fn, time);
    };
}
// 节流
export function throttle(func, delay) {
    var prev = Date.now(); //prev  = 1000
    return function () {
        var context = this;
        var args = arguments;
        var now = Date.now(); //
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    };
}
export { EventBus } from './observer';
