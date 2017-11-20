import { Injectable } from '@angular/core';

/**
 * util 类存放和业务有关的公共方法
 * @description
 */
@Injectable()
export class Util {

    constructor() {
    }

    testReturn(str: string) {
        return str;
    }

}
