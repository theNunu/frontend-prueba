import { BaseEntityI } from "../../../shared/interfaces/base-entity.interface";
import { CinemaI } from "../../cinema-maintenance/interfaces/cinema.interface";
import { RoomI } from "../../room-maintenance/interfaces/room.interface";

export interface CinemaRoomI extends BaseEntityI<number> {
    cinemaId : number
    roomId : number
    cinema: CinemaI;
    room: RoomI
    endDate: Date
}