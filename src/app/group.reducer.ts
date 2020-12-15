import { Action, createReducer, on } from '@ngrx/store';

import { addMember, reset } from './group.actions';
import { AddMemberState } from './state/add-member-state';

const initialState: AddMemberState = {} as AddMemberState;

const groupReducer = createReducer(
    initialState,
    on(addMember, (state, { request }) => ({group: request.group, email: request.email})),
    on(reset, (state) => initialState)
)

export function reducer(state: AddMemberState, action: Action) {
    return groupReducer(state, action);
}

