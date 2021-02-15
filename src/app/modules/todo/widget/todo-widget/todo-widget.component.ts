import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../model/todo.model';
import { TodoSyncStorageService } from '../../service/todo-sync-storage.service';
import {
  TodoCreateAction,
  TodoDeleteAction,
  TodoEditAction,
  TodoToggleAction,
} from '../../store/todo/todo.actions';
import { TodoState } from '../../store/todo/todo.reducer';
import { todoListSelector } from '../../store/todo/todo.selectors';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css'],
})
export class TodoWidgetComponent implements OnInit {
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(
    private store$: Store<TodoState>,
    private todoSyncStorageService: TodoSyncStorageService
  ) {}

  ngOnInit(): void {
    this.todoSyncStorageService.init();
  }

  onCreate(name: string): void {
    this.store$.dispatch(new TodoCreateAction({ name, id: null, state: null }));
  }

  onDelete(id: number): void {
    this.store$.dispatch(new TodoDeleteAction({ name: null, id, state: null }));
  }

  onToggle(id: number): void {
    this.store$.dispatch(new TodoToggleAction({ name: null, id, state: null }));
  }

  onEdit({ id, name }): void {
    this.store$.dispatch(new TodoEditAction({ id, name, state: null }));
  }
}
