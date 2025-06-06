import { Component, OnInit } from '@angular/core';
import { CinemaFormComponent } from "../../components/cinema-form/cinema-form.component";
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../../services/cinema.service';
import { CinemaI } from '../../interfaces/cinema.interface';

@Component({
  selector: 'app-cinema-update',
  standalone: true,
  imports: [CinemaFormComponent],
  templateUrl: './cinema-update.component.html',
  styleUrl: './cinema-update.component.scss'
})
export class CinemaUpdateComponent implements OnInit {
  cinema!: CinemaI

  constructor(
    private route: ActivatedRoute,
    private cinemaService: CinemaService
  ) {

  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.cinemaService.getByIdCinema(id).subscribe({
      next: res => {
      if (res.data && !Array.isArray(res.data)) {
        this.cinema = res.data;
      } else {
        // handle error or assign a default value if needed
        console.error('Invalid cinema data:', res.data);
      }
      console.log(res.data)
    }
    })
  }
}
