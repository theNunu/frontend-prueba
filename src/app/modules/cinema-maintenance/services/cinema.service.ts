import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CinemaI } from '../interfaces/cinema.interface';
import { HttpClient } from '@angular/common/http';
import { BaseResponseI } from '../../../shared/interfaces/base-response.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private cinemaSubject = new BehaviorSubject<CinemaI[]>([]);
  public entities$ = this.cinemaSubject.asObservable();

  constructor(
    private _http: HttpClient
  ) { }

  getAllCinemas(): Observable<BaseResponseI<CinemaI[]>> {
    return this._http.get<BaseResponseI<CinemaI[]>>
      (`${environment.apiUrl}cinemas`);
  }

  getByIdCinema(id: number): Observable<BaseResponseI<CinemaI>> {
    return this._http.get<BaseResponseI<CinemaI>>
      (`${environment.apiUrl}cinemas/${id}`);
  }

  postCinema(cinema: CinemaI): Observable<BaseResponseI<CinemaI>> {
    return this._http.post<BaseResponseI<CinemaI>>
      (`${environment.apiUrl}cinemas`, cinema)
  }

  updateCinema(id: number, cinema: CinemaI): Observable<BaseResponseI<CinemaI>> {
    return this._http.put<BaseResponseI<CinemaI>>
      (`${environment.apiUrl}cinemas/${id}`, cinema)
  }

  deleteCinema(id: number): Observable<BaseResponseI<CinemaI>> {
    return this._http.delete<BaseResponseI<CinemaI>>(
      `${environment.apiUrl}cinemas/${id}`
    );
  }
}
