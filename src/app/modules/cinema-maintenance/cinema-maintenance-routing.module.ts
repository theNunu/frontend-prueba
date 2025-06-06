import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaListComponent } from './pages/cinema-list/cinema-list.component';
import { CinemaCreateComponent } from './pages/cinema-create/cinema-create.component';
import { CinemaUpdateComponent } from './pages/cinema-update/cinema-update.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cinema-list' },
  { path: 'cinema-list',        component: CinemaListComponent },
  { path: 'cinema-create',      component: CinemaCreateComponent },
  { path: 'cinema-update/:id',  component: CinemaUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemaMaintenanceRoutingModule { }
