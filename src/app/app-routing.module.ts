import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiledListComponent } from './filedList/filedList.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',  component: FiledListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}