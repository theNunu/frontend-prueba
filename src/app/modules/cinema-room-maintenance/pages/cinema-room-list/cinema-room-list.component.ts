import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CinemaRoomI } from '../../interfaces/cinema-room.interface';
import { CinemaRoomService } from '../../services/cinema-room.service';
// import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CinemaService } from '../../../cinema-maintenance/services/cinema.service';
import { MatCardModule } from '@angular/material/card';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cinema-room-list',
  standalone: true,
  imports: [MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './cinema-room-list.component.html',
  styleUrl: './cinema-room-list.component.scss'
})
export class CinemaRoomListComponent implements OnInit {

  cinemaForm!: FormGroup;
  roomForm!: FormGroup;
  title = "lista de las salas de peliculas"
  // cinemaRooms: any[] = [];
  dataSource: CinemaRoomI[] = []

  displayColumns = [
    'Acciones',
    'Id',
    'nombre de pelicula',
    'sala'
  ]


  constructor(
    private cinemaService: CinemaService,
    private cinemaRoomService: CinemaRoomService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllCinemaRooms();
  }

  getAllCinemaRooms() {
    // this.crService.getAllCinemas().subscribe(res => {  
    //   // Se asume que cada item tiene: roomId, cinemaId, endDate
    //   this.cinemaRoom = res.data || [];
    // });
    this.cinemaRoomService.getAllCinemaRooms().subscribe(res => {
      this.dataSource = Array.isArray(res.data) && res.data.every(item => !Array.isArray(item)) && res.data !== null ? res.data as CinemaRoomI[] : []
    })
  }


  onEdit(cinemaRoom: CinemaRoomI) {
    this.router.navigate([`cinema-room-maintenance/cinema-room-update/${cinemaRoom.id}`])
    console.log(cinemaRoom.id)
    
  }

  onDelete(cinemaRoom: CinemaRoomI) {
    Swal.fire({
      title: '¿Estás seguro?',
      // text: `Vas a eliminar "${cinemaRoom.name}"`,
      text: ' Vas a eliminarlo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cinemaService.deleteCinema(cinemaRoom.id!).subscribe({
          next: () => {
            Swal.fire('Eliminado', 'La película fue eliminada.', 'success');
            this.getAllCinemaRooms(); // Recarga la lista
          },
          error: () => {
            Swal.fire('Error', 'No se pudo eliminar la película.', 'error');
          }
        });
      }
    });


  }

  
  onRegister() {
    this.router.navigate(['cinema-room-maintenance/cinema-room-create/'])
  }

  checkStatus(cinemaRoom: CinemaRoomI) {
    this.cinemaRoomService.searchRoomStatus(cinemaRoom?.room?.name).subscribe({
      next: res => {
        if(!res?.message) {
          throw new Error('Se ha caido esta monda');
        }

        Swal.fire(
          'Checando estado',
          res?.data?.toString(),
          'info'
        )
      },
      error: (err) => console.error(err)
    })
  }

}
