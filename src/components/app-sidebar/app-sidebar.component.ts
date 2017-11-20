import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar-component',
    templateUrl: './app-sidebar.component.html',
    styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
    time: string;

    constructor(
    ) {
    }

    ngOnInit() {
    }

}
