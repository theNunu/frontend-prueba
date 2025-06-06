import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-form',
  standalone: true,
  imports: [MatButtonModule, MatInputModule],
  templateUrl: './menu-form.component.html',
  styleUrl: './menu-form.component.scss'
})
export class MenuFormComponent {

  constructor(private router: Router) {

  }


  goToListCinema() {
    this.router.navigate(['cinema-maintenance/'])
  }
  goToListRoom() {
    this.router.navigate(['room-maintenance/'])
  }
  goToRoomsWithMovies() {
    this.router.navigate(['cinema-room-maintenance/'])
  }


}
