import { BaseEntityI } from "../../../shared/interfaces/base-entity.interface";

export interface CinemaI extends BaseEntityI<number> {
    name: string;
    duration: number;
    urlImage: string
}