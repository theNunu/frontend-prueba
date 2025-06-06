import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomMaintenanceRoutingModule } from './room-maintenance-routing.module';
import { CinemaMaintenanceRoutingModule } from '../cinema-maintenance/cinema-maintenance-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoomMaintenanceRoutingModule
  ]
})
export class RoomMaintenanceModule { }
