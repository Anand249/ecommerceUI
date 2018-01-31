import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';

const appRoutes: Routes = [
  {
path: 'history',
component: HistoryComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
