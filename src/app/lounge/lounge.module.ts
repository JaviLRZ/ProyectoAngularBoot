import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicasComponent } from './pages/basicas/basicas.component';
import { MainComponent } from './pages/main/main.component';
import { ArticlesComponent } from './pages/articles/articles.component';





@NgModule({
  declarations: [
    BasicasComponent,
    MainComponent,
    ArticlesComponent,

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports:[
    BasicasComponent,
    MainComponent,
    ArticlesComponent,

  ]
})
export class LoungeModule { }
