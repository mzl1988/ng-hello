import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';
import * as _ from 'lodash';
import * as $ from 'jquery';
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
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=856915677a22b6dec9c386e6e2d8278d&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F2cc8f85939fb47ea80c23385d1e063ca.jpeg',
            name: '百家新闻头条',
            appId: '1549974399926031'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=69b35d3e083f9c8bf8a951dddbd2b395&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F586d81327fd28c5c0fa32cbda121174a.png',
            name: '央视财经',
            appId: '1550619645364003'
        }
    ];
    media: any;
    count = 0;
    pageNumber = 1;
    articles: any[] = [];
    loading = false;
    hasMore = false;
    readId: any;
    readIndex: any;
    article: any;
    contentHtml: any;

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
                let items = res.data.items;
                items.forEach(item => {
                    item.content = JSON.parse(item.content);
                });
                this.articles = this.articles.concat(items);
                this.hasMore = res.data.has_more;
                if (this.hasMore) {
                    this.pageNumber++;
                }
            },
            error => {
            });
    }

    readArticle(id, index) {
        this.readId = id;
        this.readIndex = index;
        $('app-read .modal-body').scrollTop(0);
        $('app-read .read-modal').animate({'margin-left': 0});
        this.article = this.articles[index];
        this.article.logo = _.find(this.medias, {appId: this.article.app_id}).pic;
        this.formatContent();
    }

    formatContent() {
        this.contentHtml = '';
        for (let index = 0; index < this.article.content.items.length; index++) {
            let item = this.article.content.items[index];
            if (index === 0 || item.type === 'segment') {
                continue;
            }
            if (item.type === 'text') {
                if (item.data.indexOf('点击上面 蓝色字关注') > -1 || item.data.indexOf('By政商内参') > -1) {
                    continue;
                }

                if (item.data.indexOf('作者：') > -1 && item.data.indexOf('来源：') > -1) {
                    continue;
                }

                if (item.data.indexOf('来源：') > -1 && item.data.indexOf('ID：') > -1) {
                    continue;
                }

                if (item.data.indexOf('来源：') > -1 && item.data.indexOf('微信号：') > -1) {
                    continue;
                }

                this.contentHtml = this.contentHtml + `<p>${item.data}</p>`;

            } else if (item.type === 'image') {
                this.contentHtml = this.contentHtml + `<img src="${item.data.original.src}">`;
            }
        }
    }

    closeReadModal() {
        $('app-read .read-modal').animate({'margin-left': '120vw'});
    }
}
