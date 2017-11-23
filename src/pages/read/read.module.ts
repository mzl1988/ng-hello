import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Http, JsonpModule } from '@angular/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {
    PerfectScrollbarModule, PerfectScrollbarConfigInterface,
    PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';
import { readRoutes } from './read.routes';
import { ReadComponent } from './read.component';
import { HttpInterceptorService } from '../../providers/HttpInterceptorService';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    swipePropagation: false,
    wheelPropagation: false
};

@NgModule({
    imports: [
        CommonModule,
        JsonpModule,
        PerfectScrollbarModule,
        TooltipModule.forRoot(),
        RouterModule.forChild(readRoutes)
    ],
    exports: [],
    declarations: [
        ReadComponent
    ],
    providers: [
        { provide: Http, useClass: HttpInterceptorService }
    ],
})
export class ReadModule { }
