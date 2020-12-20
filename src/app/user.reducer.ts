import { Action, createReducer, on } from '@ngrx/store';

import { seeMember } from './user.actions';
import { UserState } from './state/user-state';

const initialState: UserState = {} as UserState;

const groupReducer = createReducer(
    initialState,
    on(seeMember, (state, { member }) => ({user: member.user}))
)

export function reducer(state: UserState, action: Action) {
    return groupReducer(state, action);
}

