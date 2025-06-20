import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CinemaService } from '../../services/cinema.service';
import { CinemaI } from '../../interfaces/cinema.interface';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-cinema-list',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './cinema-list.component.html',
  styleUrl: './cinema-list.component.scss'
})
export class CinemaListComponent implements OnInit {
  title = 'Lista de películas'
  displayColumns = [
    'Acciones',
    'Id',
    'Nombre',
    'Duración',
    'Imagen'
  ]

  dataSource: CinemaI[] = []

  findNameCinema = new FormControl('')
  //Esto crea un campo de formulario en Angular que guarda y controla el valor del input donde escribes el nombre del emperador.

  constructor(
    private cinemaService: CinemaService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.getAllCinemas()
    this.exectSearch()
  }

  getAllCinemas() {
    this.cinemaService.getAllCinemas().subscribe(res => {
      this.dataSource = Array.isArray(res.data) && res.data.every(item => !Array.isArray(item)) && res.data !== null ? res.data as CinemaI[] : []
    })
  }

  exectSearch() {

    this.findNameCinema.valueChanges.pipe(debounceTime(300)).subscribe({
      next: res => {
        this.getListByName(res ?? '');
      }
    })
  }

  getListByName(name: string) {
    if (!name || name.trim() === '') {
      this.getAllCinemas(); // Si el campo está vacío, recarga la lista
      return;
    }

    this.cinemaService.getCinemaByName(name).subscribe({
      next: res => {
        this.dataSource = Array.isArray(res.data) && res.data.every(item => !Array.isArray(item)) && res.data !== null
          ? res.data as CinemaI[]
          : [];
      },
      error: err => {
        console.warn('No se encontró la pelicula:', err);
        this.dataSource = []; // Muestra tabla vacía si no se encuentra
      }
    });
  }



  //*******funcion de prueba *******
  // postCinema() { 
  //   const cinema: CinemaI = {
  //     name: 'jhon Salchichon',
  //     duration: 150,
  //     urlImage: 'https://www.google.com'
  //   }
  //   this.cinemaService.postCinema(cinema).subscribe(res => {
  //     console.log(res)
  //   })
  // }

  onEdit(cinema: CinemaI) {
    this.router.navigate([`cinema-maintenance/cinema-update/${cinema.id}`])
    console.log(cinema.id)
  }

  onDelete(cinema: CinemaI) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Vas a eliminar "${cinema.name}"`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cinemaService.deleteCinema(cinema.id!).subscribe({
          next: () => {
            Swal.fire('Eliminado', 'La película fue eliminada.', 'success');
            this.getAllCinemas(); // Recarga la lista
          },
          error: () => {
            Swal.fire('Error', 'No se pudo eliminar la película.', 'error');
          }
        });
      }
    });
  }


  onRegister() {
    this.router.navigate(['cinema-maintenance/cinema-create/'])
  }
}
