import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './lounge/pages/articles/articles.component';
import { BasicasComponent } from './lounge/pages/basicas/basicas.component';
import { MainComponent } from './lounge/pages/main/main.component';

const routes: Routes=[
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'basicas',
    component: BasicasComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
