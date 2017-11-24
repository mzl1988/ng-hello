import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Http, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {
    PerfectScrollbarModule, PerfectScrollbarConfigInterface,
    PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';
import { radioProfileRoutes } from './radio-profile.routes';
import { RadioProfileComponent } from './radio-profile.component';
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
        ButtonsModule.forRoot(),
        PaginationModule.forRoot(),
        RouterModule.forChild(radioProfileRoutes)
    ],
    exports: [],
    declarations: [
        RadioProfileComponent
    ],
    providers: [
        { provide: Http, useClass: HttpInterceptorService }
    ],
})
export class RadioProfileModule { }
