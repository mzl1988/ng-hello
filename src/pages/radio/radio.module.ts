import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Http, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {
    PerfectScrollbarModule, PerfectScrollbarConfigInterface,
    PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';
import { radioRoutes } from './radio.routes';
import { RadioComponent } from './radio.component';
import { HttpInterceptorService } from '../../providers/HttpInterceptorService';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    swipePropagation: false,
    wheelPropagation: false
};

@NgModule({
    imports: [
        CommonModule,
        JsonpModule,
        FormsModule,
        PerfectScrollbarModule,
        TooltipModule.forRoot(),
        PaginationModule.forRoot(),
        RouterModule.forChild(radioRoutes)
    ],
    exports: [],
    declarations: [
        RadioComponent
    ],
    providers: [
        { provide: Http, useClass: HttpInterceptorService }
    ],
})
export class RadioModule { }
