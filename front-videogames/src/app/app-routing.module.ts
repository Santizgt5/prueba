import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [
  {path: 'inventory', component: InventoryComponent},
  {path: 'history', component: HistoryComponent},
  {path: '', redirectTo: '/inventory', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
