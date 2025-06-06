import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CinemaService } from '../../../cinema-maintenance/services/cinema.service';
import { RoomService } from '../../../room-maintenance/services/room.service';
import { Router } from '@angular/router';
import { CinemaRoomService } from '../../services/cinema-room.service';
import { CommonModule } from '@angular/common';
import { RoomI } from '../../../room-maintenance/interfaces/room.interface';
import { CinemaI } from '../../../cinema-maintenance/interfaces/cinema.interface';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-cinema-room-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule, ReactiveFormsModule, MatButtonModule],

  templateUrl: './cinema-room-form.component.html',
  styleUrl: './cinema-room-form.component.scss'
})
export class CinemaRoomFormComponent implements OnInit, OnChanges {
  @Input() initialData: any = null;
  cinemaRoomForm!: FormGroup;
  rooms!: RoomI[]
  cinemas!: CinemaI[]

  ngOnChanges() {
    if (this.initialData) {
      this.cinemaRoomForm.patchValue(this.initialData);
    }
  }

  constructor(
    private fb: FormBuilder,
    private cinemaService: CinemaService,
    private roomService: RoomService,
    private crService: CinemaRoomService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cinemaRoomForm = this.createCinemaForm();
    this.getAllRooms();
    this.getAllCinemas();
  }


  createCinemaForm() {
    const now = new Date();
    const endDate = new Date(now.getTime() + 4)
    return this.fb.group({
      id: [0],
      roomId: [0],
      cinemaId: [0],
      endDate: [endDate]
    });
  }


  getAllRooms() {
    this.roomService.getAllRooms().subscribe(res => {
      this.rooms = Array.isArray(res.data) && res.data.every(item => Array.isArray(item) === false) && res.data !== null
        ? res.data as RoomI[]
        : [];
    })
  }

  getAllCinemas() {
    this.cinemaService.getAllCinemas().subscribe(res => {
      this.cinemas = Array.isArray(res.data) && res.data.every(item => Array.isArray(item) === false) && res.data !== null
        ? res.data as CinemaI[]
        : [];
    })
  }


  save() { //tenaias puesto el nombre malc
    const formData = this.cinemaRoomForm.getRawValue();

    if (formData.id && formData.id > 0) {
      this.crService.updateCinemaRoom(formData.id, formData).subscribe(res => {
        console.log('Se ha editado');
        this.returnToList();
      });
    } else {
      delete formData.id;
      this.crService.postCinemaRoom(formData).subscribe(res => {
        console.log('Se ha registrado');
        this.returnToList();
      });
    }

  }

  returnToList() {
    this.router.navigate(['cinema-room-maintenance/'])
  }
}
