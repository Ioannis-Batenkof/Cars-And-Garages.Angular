import { Car } from "./car"

export interface Garage {
    ID: string,
    BelongsTo: string,
    Cars: Car[]
};
