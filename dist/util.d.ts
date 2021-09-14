export declare function dateFormat(date: Date | number, isPad?: boolean): dateFormatObj;
export declare function debounces(fn: Function, time: number): () => void;
export declare function throttle(func: Function, delay: number): () => void;
export { EventBus } from './observer';
