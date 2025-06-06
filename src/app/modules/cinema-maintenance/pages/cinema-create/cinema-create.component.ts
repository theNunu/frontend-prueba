import { Component } from '@angular/core';
import { CinemaFormComponent } from "../../components/cinema-form/cinema-form.component";

@Component({
  selector: 'app-cinema-create',
  standalone: true,
  imports: [CinemaFormComponent],
  templateUrl: './cinema-create.component.html',
  styleUrl: './cinema-create.component.scss'
})
export class CinemaCreateComponent {

}
