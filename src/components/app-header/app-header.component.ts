import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CookieService } from 'ngx-cookie';
import * as moment from 'moment';
import * as $ from 'jquery';
import { log } from 'util';

@Component({
    selector: 'app-header-component',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
    skinModalRef: BsModalRef;
    time: string;

    constructor(
        private modalService: BsModalService,
        private _cookieService: CookieService
    ) {
        this.time = moment().format('HH:mm:ss');
        setInterval(() => { this.time = moment().format('HH:mm:ss'); }, 1000);
    }

    ngOnInit() {
        if (this._cookieService.get('skin') !== 'undefined' && typeof (this._cookieService.get('skin')) !== 'undefined') {
            $('html body').attr('id', this._cookieService.get('skin'));
        }
    }

    openModal(template: TemplateRef<any>) {
        this.skinModalRef = this.modalService.show(template);
    }

    setSkin(skin) {
        $('html body').attr('id', skin);
        this._cookieService.put('skin', skin);
        this.skinModalRef.hide();
    }

}
