import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppSidebarComponent } from './app-sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AppSidebarComponent
    ],
    declarations: [
        AppSidebarComponent
    ],
    providers: [
    ]
})
export class AppSidebarModule { }
