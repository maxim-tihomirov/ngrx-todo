import { Todo } from '../../model/todo.model';
import { TodoActions, TodoActionsType } from './todo.actions';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: [],
};

export const todoReducer = (
  state: TodoState = initialState,
  action: TodoActions
) => {
  switch (action.type) {
    case TodoActionsType.Create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            name: action.payload.name,
            completed: false,
          },
        ],
      };
    case TodoActionsType.Delete:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    case TodoActionsType.Toggle:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
      };
    case TodoActionsType.Edit:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              name: action.payload.name,
            };
          } else {
            return todo;
          }
        }),
      };
    case TodoActionsType.Load:
      return {
        ...action.payload.state,
      };
    default:
      return state;
  }
};
