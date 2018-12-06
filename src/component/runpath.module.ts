import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RunpathComponent } from './runpath.component';
import { RunpathRoutingModule } from './runpath.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { StringFilterPipe } from '../pipes/stringFilter.pipe';

@NgModule({
  declarations: [
    RunpathComponent,
    StringFilterPipe
  ],
  imports: [
    RunpathRoutingModule,
    NgxPaginationModule,
    CommonModule,
    FormsModule
  ],
  exports: [RunpathComponent]
})
export class RunpathModule { }
