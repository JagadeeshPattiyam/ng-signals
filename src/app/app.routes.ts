import { Routes } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { GridComponent } from './grid/grid.component';
export const routes: Routes = [
   {path:'',component:SignalsComponent},
   {path:'grid',component:GridComponent},
   {path:'search-user', loadComponent: () => import('./rxjs/rxjs.component').then(m => m.RxjsComponent)},
];
