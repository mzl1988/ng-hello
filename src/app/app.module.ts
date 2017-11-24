import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { PagesModule } from '../pages/pages.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        PagesModule,
        CookieModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }
