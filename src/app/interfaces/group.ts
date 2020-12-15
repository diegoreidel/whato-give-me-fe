import { User } from './user';

export interface Group {
    _id: string,
    name: string,
    description: string,
    users: User[]
}