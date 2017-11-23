import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Http, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { radioRoutes } from './radio.routes';
import { RadioComponent } from './radio.component';
import { HttpInterceptorService } from '../../providers/HttpInterceptorService';

@NgModule({
    imports: [
        CommonModule,
        JsonpModule,
        FormsModule,
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
