import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Http, JsonpModule } from '@angular/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { readRoutes } from './read.routes';
import { ReadComponent } from './read.component';
import { HttpInterceptorService } from '../../providers/HttpInterceptorService';

@NgModule({
    imports: [
        CommonModule,
        JsonpModule,
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
