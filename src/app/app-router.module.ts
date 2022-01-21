import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './lounge/pages/articles/articles.component';
import { BasicasComponent } from './lounge/pages/basicas/basicas.component';
import { SubsComponent } from './lounge/pages/subs/subs.component';
import { MainComponent } from './lounge/pages/main/main.component';
import { LoginComponent } from './lounge/pages/login/login.component';
import { FaqsComponent } from './lounge/pages/faqs/faqs.component';
import { ShoppingCartsComponent } from './lounge/pages/shopping-carts/shopping-carts.component';

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
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'shopping',
    component: ShoppingCartsComponent,
  },
  {
    path: 'subs',
    component: SubsComponent,
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
