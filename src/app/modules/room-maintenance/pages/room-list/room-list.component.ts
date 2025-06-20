import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RoomI } from '../../interfaces/room.interface';
import { RoomService } from '../../services/room.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MenuFormComponent } from "../../../menu-maintenance/components/menu-form/menu-form.component";

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MenuFormComponent
],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent implements OnInit{

  title = "lista de salas"
  displayColumns = [
    'Acciones',
    'Id',
    'Nombre',
  ]

  dataSource: RoomI[] = []

  constructor(private roomService: RoomService,
    private router: Router) { }


  ngOnInit(): void {
    this.getAllRooms()
  }

  getAllRooms() {
    this.roomService.getAllRooms().subscribe(res => {
      this.dataSource = Array.isArray(res.data) && res.data.every(item => !Array.isArray(item)) && res.data !== null ? res.data as RoomI[] : []
    })
  }

  //funcion de prueba
  postRoom() { 
    const room: RoomI = {
      name: 'marvel movies'
    }
    this.roomService.postRoom(room).subscribe(res => {
      console.log(res)
    })
  }

  onEdit(room: RoomI) {
    this.router.navigate([`room-maintenance/room-update/${room.id}`])
    console.log(room.id)
  }

  onDelete(room: RoomI) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Vas a eliminar "${room.name}"`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.roomService.deleteRoom(room.id!).subscribe({
          next: () => {
            Swal.fire('Eliminado', 'La sala fue eliminada.', 'success');
            this.getAllRooms(); // Recarga la lista
          },
          error: () => {
            Swal.fire('Error', 'No se pudo eliminar la sala.', 'error');
          }
        });
      }
    });
  }


  onRegister() {
    this.router.navigate(['room-maintenance/room-create/'])
  }


}
