import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule, MatDividerModule, MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  title = 'Inicio de sesión'

  user = {
    username: 'alexkiller',
    password: 'password123'
  }

  form!: FormGroup
  constructor(private _fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.form = this.createForm()
  }
  createForm() {
    return this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  validate() {
    if(!this.form) {
      return
    }

    const formData = this.form.getRawValue();

    if(formData.username == this.user.username && formData.password == this.user.password) {
      this.router.navigate(['cinema-room-maintenance'])
    }

  }
}
