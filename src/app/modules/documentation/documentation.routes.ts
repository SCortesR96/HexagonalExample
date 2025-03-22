import { Routes } from '@angular/router';

// Project
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { LabelsComponent } from './pages/labels/labels.component';
import { SelectsComponent } from './pages/selects/selects.component';

export default [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'inputs',
        component: InputsComponent,
      },
      {
        path: 'labels',
        component: LabelsComponent,
      },
      {
        path: 'selects',
        component: SelectsComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
] as Routes;
