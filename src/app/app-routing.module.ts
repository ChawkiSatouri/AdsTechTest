import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGridComponent } from './component/data-grid/data-grid.component';

const routes: Routes = [
  {
    path: '',
    component: DataGridComponent,
  },
  {
    path: 'home',
    component: DataGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
