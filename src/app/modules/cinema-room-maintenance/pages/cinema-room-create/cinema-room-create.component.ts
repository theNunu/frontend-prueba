import { Component } from '@angular/core';
import { CinemaRoomFormComponent } from '../../components/cinema-room-form/cinema-room-form.component';
// import { CinemaFormComponent } from '../../../cinema-maintenance/components/cinema-form/cinema-form.component';

@Component({
  selector: 'app-cinema-room-create',
  standalone: true,
  imports: [CinemaRoomFormComponent],
  templateUrl: './cinema-room-create.component.html',
  styleUrl: './cinema-room-create.component.scss'
})
export class CinemaRoomCreateComponent {

}
