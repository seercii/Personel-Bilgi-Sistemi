import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmanComponent } from './departman/departman.component';
import { ShowDepComponent } from './departman/show-dep/show-dep.component';
import { AddEditDepComponent } from './departman/add-edit-dep/add-edit-dep.component';
import { PersonelComponent } from './personel/personel.component';
import { ShowPerComponent } from './personel/show-per/show-per.component';
import { AddEditPerComponent } from './personel/add-edit-per/add-edit-per.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DepartmanComponent,
    ShowDepComponent,
    AddEditDepComponent,
    PersonelComponent,
    ShowPerComponent,
    AddEditPerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
