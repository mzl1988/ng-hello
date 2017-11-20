import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { readRoutes } from './read.routes';
import { ReadComponent } from './read.component';
import { HttpInterceptorService } from '../../providers/HttpInterceptorService';

@NgModule({
    imports: [
        CommonModule,
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
