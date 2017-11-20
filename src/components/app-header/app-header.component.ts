import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-header-component',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
    time: string;

    constructor(
    ) {
        this.time = moment().format('HH:mm:ss');
        setInterval(() => { this.time = moment().format('HH:mm:ss'); }, 1000);
    }

    ngOnInit() {
    }

}
