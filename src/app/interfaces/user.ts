import { Desire } from './desire';

export interface User {
    _id: string,
    email: string,
    name: string,
    description: string,
    desires: Desire[]
}