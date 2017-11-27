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
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=7ad1bff8b315e80834033436405d57c3&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F5aa58f476ae9598ad4bb54b408bd455b.jpeg',
            name: '每日人物',
            appId: '1541091220473059'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=00865f0ef6e6dde66325bcd02a168c57&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F4938be868411a06ea3f3b4176acaa3c6.jpeg',
            name: '有书共读',
            appId: '1548068084532147'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=5f9c4040f697b8ba58a396affffbd5b1&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F4087106f268f9e3b1430499a30d335cd.jpeg',
            name: '新世相',
            appId: '1556396465948953'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=9a7b0113ca46d8e102a19cd301cf2726&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F358b22660940ac7a0ef1f78c3efeb7ed.png',
            name: '参考消息',
            appId: '1537272048555583'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=5f49e0c5269ae5a60dcc7deeb1a9f566&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F9f3a9a4bd8821beb4676ec8d5772cbbd.png',
            name: '人民网',
            appId: '1537195104256385'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=e4e00a58e216763b61a98b3ac7517179&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2Fc71104ba43468e73fe4f63b1ebb032b3.jpeg',
            name: '中国青年网',
            appId: '1549761396709004'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=7918d22bd2afb2cfa69676b85248dbe6&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F955249521ea13beeee7a94867a21373a.png',
            name: '央广网',
            appId: '1568331104387389'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=dfbaa6b8952b222d26122ac465881f95&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F70775717da90fe411137628110bf5335.png',
            name: '解放军报融媒体',
            appId: '1560716883849991'
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
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=f60916b1f5c295d2cd26d218fdc72cb5&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2Ff77d21f4bdb6266b1cf77b4c8fd52cab.jpeg',
            name: '中国经济网',
            appId: '1568513751477809'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=177da144831f0339e5b48b6d921a096f&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2Fefdff53bc414993526c541cce004235c.png',
            name: '36氪',
            appId: '1566365578755720'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=336af0b05fa85b7a491b3d75bcf62ebc&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F416f7333ab87f327f0ed6974c0e064e5.jpeg',
            name: '钛媒体APP',
            appId: '1558840042655696'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=a95cb2f8d034acf99071e43519fc9f07&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F2f338c67bc166c145cd457c01e102de5.jpeg',
            name: '环球网',
            appId: '1549608413453462'
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
        $('app-read .read-modal').animate({ 'margin-left': 0 });
        this.article = this.articles[index];
        this.article.logo = _.find(this.medias, { appId: this.article.app_id }).pic;
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
        $('app-read .read-modal').animate({ 'margin-left': '120vw' });
    }
}
