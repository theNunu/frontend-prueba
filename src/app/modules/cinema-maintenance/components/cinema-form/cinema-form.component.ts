import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CinemaService } from '../../services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cinema-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './cinema-form.component.html',
  styleUrls: ['./cinema-form.component.scss']
})
export class CinemaFormComponent implements OnInit, OnChanges {
  @Input() initialData: any = null;
  
  cinemaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cinemaService: CinemaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cinemaForm = this.createCinemaForm();
  }

  ngOnChanges() {
    if (this.initialData) {
      this.cinemaForm.patchValue(this.initialData);
    }
  }

  createCinemaForm() {
    return this.fb.group({
      id: [0],
      name: ['', Validators.required],
      duration: [0],
      urlImage: ['']
    });
  }

save() {
  const formData = this.cinemaForm.getRawValue();
  formData.duration = Number(formData.duration);

  if (formData.id && formData.id > 0) {
    this.cinemaService.updateCinema(formData.id, formData).subscribe(res => {
      console.log('Se ha editado');
      this.returnToList();
    });
  } else {
    delete formData.id; // ❌ elimina el campo id antes de enviar
    this.cinemaService.postCinema(formData).subscribe(res => {
      console.log('Se ha registrado');
      this.returnToList();
    });
  }
}

  returnToList() {
    this.router.navigate(['cinema-maintenance/'])
  }
}
