import { Routes } from '@angular/router';
// Update the import path if the file is named 'home-page.component.ts' and located in a different folder, for example:
import { HomePageComponent } from './home-page/home-page.component';
import { ListenerGridComponent } from './tools/queue-admin/listener-grid.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent // Use the actual component class
    },
    {
        path: 'listener',
        loadComponent: () => import('./tools/queue-admin/listener-grid.component').then(m => m.ListenerGridComponent)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full' // Ensure that unmatched routes redirect to the home page
    }
];
