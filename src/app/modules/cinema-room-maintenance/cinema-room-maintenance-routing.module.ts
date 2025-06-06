import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaRoomListComponent } from './pages/cinema-room-list/cinema-room-list.component';
import { CinemaRoomCreateComponent } from './pages/cinema-room-create/cinema-room-create.component';
import { CinemaRoomUpdateComponent } from './pages/cinema-room-update/cinema-room-update.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'cinema-room-list' },
    { path: 'cinema-room-list',        component: CinemaRoomListComponent},
    { path: 'cinema-room-create',      component: CinemaRoomCreateComponent },
    { path: 'cinema-room-update/:id',  component: CinemaRoomUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemaRoomMaintenanceRoutingModule { }
