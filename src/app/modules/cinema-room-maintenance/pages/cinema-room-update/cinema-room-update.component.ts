import { Component, OnInit } from '@angular/core';
import { CinemaRoomFormComponent } from '../../components/cinema-room-form/cinema-room-form.component';
import { CinemaRoomI } from '../../interfaces/cinema-room.interface';
import { ActivatedRoute } from '@angular/router';
import { CinemaRoomService } from '../../services/cinema-room.service';

@Component({
  selector: 'app-cinema-room-update',
  standalone: true,
  templateUrl: './cinema-room-update.component.html',
  styleUrl: './cinema-room-update.component.scss',
  imports: [CinemaRoomFormComponent]
})
export class CinemaRoomUpdateComponent implements OnInit {

  cinemaRoom!: CinemaRoomI

  constructor(
    private route: ActivatedRoute,
    private cinemaRoomService: CinemaRoomService
  ) {

  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.cinemaRoomService.getByIdCinemaRoom(id).subscribe({
      next: res => {
        if (res.data && !Array.isArray(res.data)) {
          this.cinemaRoom = res.data;
        } else {
          // handle error or assign a default value if needed
          console.error('Invalid room data:', res.data);
        }
        console.log(res.data)
      }
    })
  }

}



