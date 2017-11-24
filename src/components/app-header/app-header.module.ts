import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppHeaderComponent } from './app-header.component';

@NgModule({
    imports: [
        CommonModule,
        TooltipModule.forRoot(),
        ModalModule.forRoot()
    ],
    exports: [
        AppHeaderComponent
    ],
    declarations: [
        AppHeaderComponent
    ],
    providers: [
    ]
})
export class AppHeaderModule { }
