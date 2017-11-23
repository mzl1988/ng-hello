import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Http, Response, Jsonp } from '@angular/http';

@Injectable()
export class RadioService {
    apiUrl = 'http://www.tingban.cn/webapi';

    constructor(
        private jsonp: Jsonp
    ) { }

    getCategoryList() {
        return this.jsonp
            .get(`${this.apiUrl}/category/list?callback=JSONP_CALLBACK`)
            .map((response: Response) => {
                return response.json();
            });
    }

    getRadioBycategoryId(categoryId, pageSize, pageNum) {
        return this.jsonp
            .get(`${this.apiUrl}/resource/search?cid=${categoryId}&rtype=20000&sorttype=HOT_RANK_DESC&pagesize=${pageSize}&pagenum=${pageNum}&callback=JSONP_CALLBACK`)
            .map((response: Response) => {
                return response.json();
            });
    }
}
