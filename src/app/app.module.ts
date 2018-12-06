import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataResolver } from '../services/dataService.service'
import { AppComponent } from './app.component';
import { RunpathModule } from '../component/runpath.module';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  { path: 'test', loadChildren: 'src/component/runpath.module#RunpathModule' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [
    DataResolver,
    ApiService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
