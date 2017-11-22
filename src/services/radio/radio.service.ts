import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Http, Response, Jsonp } from '@angular/http';

@Injectable()
export class RadioService {
    apiUrl = 'https://author.baidu.com';

    constructor(
        private jsonp: Jsonp
    ) { }

    getArticleList(appId, pageNumber) {
        return this.jsonp
        .get(`${this.apiUrl}/list?type=article&context={"offset":"-1_${(pageNumber - 1) * 20}","app_id":"${appId}"}&callback=JSONP_CALLBACK`)
        .map((response: Response) => {
            return response.json();
        });
    }
}
