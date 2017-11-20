import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
    medias = [
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=913392957a53fa338ce9a934ef8605e0&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F36e2823b12db465bfd27ecfdc772c446.jpeg',
            name: '政商内参'
        },
        {
            pic: 'https://timg01.bdimg.com/timg?pa&Imgtype=0&sec=1439619614&di=af4b737d91d7e7197420248325c91be2&quality=60&size=f128_128&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F797ed885336591902814391ad9c3ac12.jpeg',
            name: '读者文摘'
        }
    ];

    media: object;

    constructor() {

    }

    ngOnInit() {
        this.media = this.medias[0];
    }

    selected(media) {
        this.media = media;
    }

}
