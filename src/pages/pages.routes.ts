import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

export const pagesRoutes = [
    // {
    //     path: 'login',
    //     loadChildren: 'pages/login/login.module#LoginModule'
    // },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'radio', pathMatch: 'full' },
            { path: 'radio', loadChildren: 'pages/radio/radio.module#RadioModule' },
            { path: 'radio-profile/:id', loadChildren: 'pages/radio-profile/radio-profile.module#RadioProfileModule' },
            { path: 'read', loadChildren: 'pages/read/read.module#ReadModule' },
            { path: '**', redirectTo: 'radio' }
        ]
    }
];
