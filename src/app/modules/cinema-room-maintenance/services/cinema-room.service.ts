import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseResponseI } from '../../../shared/interfaces/base-response.interface';
import { environment } from '../../../../environments/environment';
import { CinemaRoomI } from '../interfaces/cinema-room.interface';

@Injectable({
    providedIn: 'root'
})
export class CinemaRoomService {

    // private cinemaSubject = new BehaviorSubject<CinemaI[]>([]);
    // public entities$ = this.cinemaSubject.asObservable();

    constructor(
        private _http: HttpClient
    ) { }

    getAllCinemaRooms(): Observable<BaseResponseI<CinemaRoomI[]>> {
        return this._http.get<BaseResponseI<CinemaRoomI[]>>(`${environment.apiUrl}cinema-room-asociations`);
    }

    getByIdCinemaRoom(id: number): Observable<BaseResponseI<CinemaRoomI>> {
        return this._http.get<BaseResponseI<CinemaRoomI>>(`${environment.apiUrl}cinema-room-asociations/${id}`);
    }

    postCinemaRoom(cinema: CinemaRoomI): Observable<BaseResponseI<CinemaRoomI>> {
        return this._http.post<BaseResponseI<CinemaRoomI>>
            (`${environment.apiUrl}cinema-room-asociations`, cinema)
    }

    updateCinemaRoom(id: number, cinema: CinemaRoomI): Observable<BaseResponseI<CinemaRoomI>> {
        return this._http.put<BaseResponseI<CinemaRoomI>>
            (`${environment.apiUrl}cinema-room-asociations/${id}`, cinema)
    }

    deleteCinemaRoom(id: number): Observable<BaseResponseI<CinemaRoomI>> {
        return this._http.delete<BaseResponseI<CinemaRoomI>>(
            `${environment.apiUrl}cinema-room-asociations/${id}`
        );
    }
}
