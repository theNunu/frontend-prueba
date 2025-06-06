import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RoomService } from '../../services/room.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-room-form',
  standalone: true,
  imports: [
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule
  ],
  templateUrl: './room-form.component.html',
  styleUrl: './room-form.component.scss'
})
export class RoomFormComponent {
  @Input() initialData: any = null;
  roomForm!: FormGroup;
  title!: string

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = "Registrar Sala de Cine"
    this.roomForm = this.createRoomForm();
  }

  ngOnChanges() {
    if (this.initialData) {
      this.title = "Editar Sala de Cine"
      this.roomForm.patchValue(this.initialData);
    }
  }

  createRoomForm() {
    return this.fb.group({
      id: [0],
      name: ['', Validators.required],
    });
  }

  save() {
    const formData = this.roomForm.getRawValue();

    if (formData.id && formData.id > 0) {
      this.roomService.updateRoom(formData.id, formData).subscribe(res => {
        console.log('Se ha editado');
        this.returnToList();
      });
    } else {
      delete formData.id; 
      this.roomService.postRoom(formData).subscribe(res => {
        console.log('Se ha registrado');
        this.returnToList();
      });
    }
  }

  returnToList() {
    this.router.navigate(['room-maintenance/'])
  }

}
