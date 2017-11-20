import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSidebarComponent } from './app-sidebar.component';

@NgModule({
    imports: [
        CommonModule,
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
