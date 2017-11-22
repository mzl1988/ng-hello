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

    constructor(
        private radioService: RadioService
    ) {

    }

    ngOnInit() {

    }

}
