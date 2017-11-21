import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';
import * as _ from 'lodash';
import { ReadService } from '../../services';
import { log } from 'util';

@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.scss'],
    providers: [ReadService]
})
export class ReadComponent implements OnInit {
    medias = [
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=913392957a53fa338ce9a934ef8605e0&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F36e2823b12db465bfd27ecfdc772c446.jpeg',
            name: '政商内参',
            appId: '1552500388453128'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=00865f0ef6e6dde66325bcd02a168c57&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F4938be868411a06ea3f3b4176acaa3c6.jpeg',
            name: '有书共读',
            appId: '1548068084532147'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=8ed4eeb249d503a67d40893d02364bef&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2Fecba2ec4c04301a845b5b9227cefc394.png',
            name: '央视新闻',
            appId: '1570168240515616'
        }
    ];
    media: any;
    count = 0;
    pageNumber = 1;
    articles: any[] = [];
    loading = false;
    hasMore = false;

    constructor(
        private readService: ReadService
    ) {

    }

    ngOnInit() {
        this.media = this.medias[0];
        this.getArticleList();
    }

    selected(media) {
        this.media = media;
        this.count = 0;
        this.pageNumber = 1;
        this.articles = [];
        this.loading = false;
        this.getArticleList();
    }

    getArticleList() {
        this.loading = true;
        this.readService.getArticleList(this.media.appId, this.pageNumber)
            .finally(() => {
                this.loading = false;
            })
            .subscribe(res => {
                if (_.isEmpty(res.data)) {
                    this.hasMore = false;
                    return;
                }
                this.articles = this.articles.concat(res.data.items);
                this.hasMore = res.data.has_more;
                if (this.hasMore) {
                    this.pageNumber++;
                }
            },
            error => {
            });
    }

}
