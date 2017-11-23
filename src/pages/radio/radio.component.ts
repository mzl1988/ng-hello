import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';
import * as _ from 'lodash';
import * as $ from 'jquery';
import { RadioService } from '../../services';
import { log } from 'util';

@Component({
    selector: 'app-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
    providers: [RadioService]
})
export class RadioComponent implements OnInit {
    category: any[] = [];
    selCategory: any;
    totalItems = 0;
    maxSize = 5;
    itemsPerPage = 24;
    currentPage = 1;
    totalPages = 0;
    loading = false;
    dataList: any[] = [];

    constructor(
        private radioService: RadioService
    ) {

    }

    ngOnInit() {
        this.getCategoryList();
    }

    pageChanged(event: any): void {
        this.currentPage = event.page;
        this.getRadioBycategoryId();
    }

    getCategoryList() {
        this.radioService.getCategoryList()
            .finally(() => {
            })
            .subscribe(res => {
                if (res.message === 'success') {
                    this.category = res.result.dataList;
                }
                this.category.shift();
                this.selected(this.category[0]);
            },
            error => {
            });
    }

    selected(category) {
        this.selCategory = category;
        this.totalItems = 0;
        this.currentPage = 1;
        this.getRadioBycategoryId();
    }

    getRadioBycategoryId() {
        this.dataList = [];
        this.loading = true;
        this.radioService.getRadioBycategoryId(this.selCategory.categoryId, this.itemsPerPage, this.currentPage)
            .finally(() => {
                this.loading = false;
            })
            .subscribe(res => {
                if (res.message !== 'success') {
                    return;
                }
                this.totalItems = res.result.totalCounts;
                this.totalPages = res.result.totalPages;
                this.dataList = res.result.dataList;
            },
            error => {
            });
    }

}
