import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseResponseI } from '../../../shared/interfaces/base-response.interface';
import { RoomI } from '../interfaces/room.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    private cinemaSubject = new BehaviorSubject<RoomI[]>([]);
    public entities$ = this.cinemaSubject.asObservable();

    constructor(
        private _http: HttpClient
    ) { }

    getAllRooms(): Observable<BaseResponseI<RoomI[]>> {
        return this._http.get<BaseResponseI<RoomI[]>>(`${environment.apiUrl}rooms`);
    }

    getByIdRoom(id: number): Observable<BaseResponseI<RoomI>> {
        return this._http.get<BaseResponseI<RoomI>>(`${environment.apiUrl}rooms/${id}`);
    }

    postRoom(room: RoomI): Observable<BaseResponseI<RoomI>> {
        return this._http.post<BaseResponseI<RoomI>>
            (`${environment.apiUrl}rooms`, room)
    }

    updateRoom(id: number, room: RoomI): Observable<BaseResponseI<RoomI>> {
        return this._http.put<BaseResponseI<RoomI>>
            (`${environment.apiUrl}rooms/${id}`, room)
    }

    deleteRoom(id: number): Observable<BaseResponseI<RoomI>> {
        return this._http.delete<BaseResponseI<RoomI>>(
            `${environment.apiUrl}rooms/${id}`
        );
    }
}
