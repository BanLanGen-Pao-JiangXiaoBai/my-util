export interface dateFormatObj {
    'year': number | string;
    'month': number | string;
    'day': number | string;
    'week': number | string;
}
export interface EventEmitterObj {
    on: (event: string, fn: Function) => void;
    emit: (event: string, ...arg: any[]) => void;
    off: (event: string, fn: Function) => void;
    once: (event: string, fn: Function) => void;
}
export interface EventEmitter {
    (): EventEmitterObj;
    new (): EventEmitterObj;
}
