import { createAction, props } from '@ngrx/store';
import { UserState } from './state/user-state';

export const seeMember = createAction('[See Member of Group Component] See Member', props<{member: UserState}>());
