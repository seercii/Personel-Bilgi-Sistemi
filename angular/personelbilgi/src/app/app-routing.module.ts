import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonelComponent } from './personel/personel.component';
import { DepartmanComponent } from './departman/departman.component';

const routes: Routes = [
  {path:'personel',component:PersonelComponent},
  {path:'departman',component:DepartmanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
