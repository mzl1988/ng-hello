import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import * as _ from 'lodash';
import * as $ from 'jquery';
import { RadioService } from '../../services';
import { log } from 'util';

@Component({
    selector: 'app-radio-profile',
    templateUrl: './radio-profile.component.html',
    styleUrls: ['./radio-profile.component.scss'],
    providers: [RadioService]
})
export class RadioProfileComponent implements OnInit {
    id: string;
    radio: any;
    totalItems = 0;
    maxSize = 5;
    itemsPerPage = 20;
    currentPage = 1;
    totalPages = 0;
    loading = false;
    dataList: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private radioService: RadioService
    ) {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getRadioDetail();
            this.getRadioAudioList();
        });
    }

    ngOnInit() {

    }

    getRadioDetail() {
        this.radioService.getRadioDetail(this.id)
            .finally(() => {
            })
            .subscribe(res => {
                if (res.message === 'success') {
                    this.radio = res.result;
                }
                console.log(this.radio);
            },
            error => {
            });
    }

    pageChanged(event: any): void {
        this.currentPage = event.page;
        this.getRadioAudioList();
    }

    getRadioAudioList() {
        this.dataList = [];
        this.loading = true;
        this.radioService.getRadioAudioList(this.id, this.itemsPerPage, this.currentPage)
            .finally(() => {
                this.loading = false;
            })
            .subscribe(res => {
                if (res.message !== 'success') {
                    return;
                }
                this.totalItems = res.result.count;
                this.totalPages = res.result.sumPage;
                this.dataList = res.result.dataList;
                console.log(res);
            },
            error => {
            });
    }

}
