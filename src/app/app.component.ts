import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuFormComponent } from './modules/menu-maintenance/components/menu-form/menu-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
