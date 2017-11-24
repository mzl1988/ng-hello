import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import * as _ from 'lodash';
import * as $ from 'jquery';
import { RadioService } from '../../services';
import { log } from 'util';
import { forEach } from '@angular/router/src/utils/collection';
declare let APlayer;

@Component({
    selector: 'app-radio-profile',
    templateUrl: './radio-profile.component.html',
    styleUrls: ['./radio-profile.component.scss'],
    providers: [RadioService]
})
export class RadioProfileComponent implements OnInit, OnDestroy {
    id: string;
    radio: any;
    totalItems = 0;
    maxSize = 5;
    itemsPerPage = 20;
    currentPage = 1;
    totalPages = 0;
    loading = false;
    dataList: any[] = [];
    playIndex: number;
    audio: any;
    showPlay = false;
    aPlayer: any;
    music: any[] = [];

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
    ngOnDestroy() {
        if (this.aPlayer) {
            this.aPlayer.destroy();
        }
    }

    getRadioDetail() {
        this.radioService.getRadioDetail(this.id)
            .finally(() => {
            })
            .subscribe(res => {
                if (res.message === 'success') {
                    this.radio = res.result;
                }
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
                this.music = [];
                this.dataList.forEach(el => {
                    this.music.push({
                        title: el.audioName,
                        author: el.uploaderName,
                        url: el.mp3PlayUrl,
                        pic: el.audioPic
                    });
                });
                this.initPlayer();
            },
            error => {
            });
    }

    toPlay() {
        this.showPlay = true;
        $('app-radio-profile .list-container').addClass('has-player');
        $('app-radio-profile #player').show();
        this.aPlayer.play();
    }

    initPlayer() {
        if (this.aPlayer) {
            this.aPlayer.destroy();
        }
        this.aPlayer = new APlayer({
            element: document.getElementById('player'),
            narrow: false,
            autoplay: false,
            mutex: true,
            theme: '#F1565E',
            preload: 'metadata',
            listmaxheight: '513px',
            music: this.music
        });
        $('app-radio-profile #player .aplayer-list').css({ 'display': 'none' });
        $('app-radio-profile #player .aplayer-info').css({ 'border-bottom': 0 });
        $('app-radio-profile #player .aplayer-icon-mode').show();
        $('app-radio-profile #player .aplayer-icon-menu').remove();
        this.addEvent();
        if (this.showPlay) {
            this.aPlayer.play();
        }
    }

    addEvent() {
        this.aPlayer.on('play', () => {
            console.log('aPlayer: play');
            this.playIndex = this.aPlayer.playIndex;
        });
        this.aPlayer.on('ended', () => {
            console.log('aPlayer: ended');
        });
        this.aPlayer.on('error', () => {
            console.log('aPlayer: error');
        });
    }

    setMusic(index) {
        this.aPlayer.setMusic(index);
        this.showPlay = true;
        $('app-radio-profile .list-container').addClass('has-player');
        $('app-radio-profile #player').show();
        this.aPlayer.play();
    }
}
