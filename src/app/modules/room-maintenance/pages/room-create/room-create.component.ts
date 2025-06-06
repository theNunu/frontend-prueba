import { Component } from '@angular/core';
import { CinemaFormComponent } from "../../../cinema-maintenance/components/cinema-form/cinema-form.component";
import { RoomFormComponent } from "../../components/room-form/room-form.component";

@Component({
  selector: 'app-room-create',
  standalone: true,
  imports: [CinemaFormComponent, RoomFormComponent],
  templateUrl: './room-create.component.html',
  styleUrl: './room-create.component.scss'
})
export class RoomCreateComponent {

}
