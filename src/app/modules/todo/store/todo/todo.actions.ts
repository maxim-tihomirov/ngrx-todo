import { Action } from '@ngrx/store';

export enum TodoActionsType {
  Create = '[TODO] create todo item',
  Delete = '[TODO] delete todo item',
  Toggle = '[TODO] toggle todo item',
  Edit = '[TODO] edit todo item',
}

export class TodoCreateAction implements Action {
  readonly type: string = TodoActionsType.Create;
  constructor(public payload: { name: string; id: number }) {}
}

export class TodoDeleteAction implements Action {
  readonly type: string = TodoActionsType.Delete;
  constructor(public payload: { name: string; id: number }) {}
}

export class TodoToggleAction implements Action {
  readonly type: string = TodoActionsType.Toggle;
  constructor(public payload: { name: string; id: number }) {}
}

export class TodoEditAction implements Action {
  readonly type: string = TodoActionsType.Edit;
  constructor(public payload: { name: string; id: number }) {}
}

export type TodoActions =
  | TodoCreateAction
  | TodoDeleteAction
  | TodoToggleAction
  | TodoEditAction;
