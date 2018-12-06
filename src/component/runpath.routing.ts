import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RunpathComponent } from './runpath.component'
import { DataResolver } from '../services/dataService.service'

const routes: Routes = [
  {
    path: '',
    component: RunpathComponent,
    resolve: {
      data: DataResolver
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DataResolver
  ]
})

export class RunpathRoutingModule {}
