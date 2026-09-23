import { Routes } from '@angular/router';
import { FixLayoutComponent } from '../layout/fix-library.layout';
import { TitlePage } from './title-page/title-page';
import { TablePage } from './table-page/table-page';
import { InputPage } from './input-page/input-page';

export const pageRoutes: Routes = [
  {
    path: '',
    component: FixLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'title',
        pathMatch: 'full',
      },
      {
        path: 'input',
        component: InputPage,
      },
      {
        path: 'title',
        component: TitlePage,
      },
      {
        path: 'table',
        component: TablePage,
      },
    ],
  },
];

export default pageRoutes;
