import { Action } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export enum TodoActionsType {
  Create = '[TODO] create todo item',
  Delete = '[TODO] delete todo item',
  Toggle = '[TODO] toggle todo item',
  Edit = '[TODO] edit todo item',
  Load = '[TODO] load todo item',
}

export class TodoCreateAction implements Action {
  readonly type: string = TodoActionsType.Create;
  constructor(public payload: { name: string; id: number; state: TodoState }) {}
}

export class TodoDeleteAction implements Action {
  readonly type: string = TodoActionsType.Delete;
  constructor(public payload: { name: string; id: number; state: TodoState }) {}
}

export class TodoToggleAction implements Action {
  readonly type: string = TodoActionsType.Toggle;
  constructor(public payload: { name: string; id: number; state: TodoState }) {}
}

export class TodoEditAction implements Action {
  readonly type: string = TodoActionsType.Edit;
  constructor(public payload: { name: string; id: number; state: TodoState }) {}
}
export class TodoLoadAction implements Action {
  readonly type: string = TodoActionsType.Load;
  constructor(public payload: { state: TodoState; name: string; id: number }) {}
}

export type TodoActions =
  | TodoCreateAction
  | TodoDeleteAction
  | TodoToggleAction
  | TodoEditAction
  | TodoLoadAction;
