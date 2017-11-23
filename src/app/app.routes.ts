import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/radio' }
];
