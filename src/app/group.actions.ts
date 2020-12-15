import { createAction, props } from '@ngrx/store';
import { AddMemberState } from './state/add-member-state';

export const addMember = createAction('[Add Member to Group Component] Add Member', props<{request: AddMemberState}>());
export const reset = createAction('[Add Member to Group Component] Reset');