import { Component, OnInit } from '@angular/core';
import { RoomI } from '../../interfaces/room.interface';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute } from '@angular/router';
import { RoomFormComponent } from '../../components/room-form/room-form.component';

@Component({
  selector: 'app-room-update',
  standalone: true,
  imports: [RoomFormComponent],
  templateUrl: './room-update.component.html',
  styleUrl: './room-update.component.scss'
})
export class RoomUpdateComponent implements OnInit{
  room!: RoomI
  
    constructor(
      private route: ActivatedRoute,
      private  roomService: RoomService
    ) {
  
    }
    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      console.log(id)
      this.roomService.getByIdRoom(id).subscribe({
        next: res => {
        if (res.data && !Array.isArray(res.data)) {
          this.room = res.data;
        } else {
          // handle error or assign a default value if needed
          console.error('Invalid room data:', res.data);
        }
        console.log(res.data)
      }
      })
    }

}
