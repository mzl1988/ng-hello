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
            { path: '', redirectTo: 'read', pathMatch: 'full' },
            { path: 'read', loadChildren: 'pages/read/read.module#ReadModule' },
            { path: '**', redirectTo: 'read' }
        ]
    }
];
