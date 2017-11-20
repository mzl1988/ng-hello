import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { pagesRoutes } from './pages.routes';
import { PagesComponent } from './pages.component';

import { AppHeaderModule, AppSidebarModule } from '../components/';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AppHeaderModule,
        AppSidebarModule,
        RouterModule.forChild(pagesRoutes)
    ],
    exports: [
    ],
    declarations: [
        PagesComponent
    ],
    providers: [
    ],
})
export class PagesModule { }
