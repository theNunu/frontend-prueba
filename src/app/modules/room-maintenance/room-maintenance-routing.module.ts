import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomCreateComponent } from './pages/room-create/room-create.component';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { RoomUpdateComponent } from './pages/room-update/room-update.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'room-list'},
  {path: 'room-create',     component: RoomCreateComponent},
  {path: 'room-list',       component: RoomListComponent},
  {path: 'room-update/:id', component: RoomUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomMaintenanceRoutingModule { }
