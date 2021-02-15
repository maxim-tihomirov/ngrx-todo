import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoState } from '../store/todo/todo.reducer';
import { todoFeatureSelector } from '../store/todo/todo.selectors';
import { filter } from 'rxjs/operators';
import { TodoLoadAction } from '../store/todo/todo.actions';

export const TODO_STORAGE_KEY = 'state';

@Injectable({
  providedIn: 'root',
})
export class TodoSyncStorageService {
  private isInit: boolean = false;

  constructor(private store$: Store<TodoState>) {}

  init(): void {
    if (this.isInit) {
      return;
    }

    this.isInit = true;
    this.loadFromStorage();

    this.store$
      .pipe(
        select(todoFeatureSelector),
        filter((state) => !!state)
      )
      .subscribe((state) => {
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(state));
      });

    window.addEventListener('storage', () => this.loadFromStorage());
  }

  private loadFromStorage(): void {
    const dataFromStorage = localStorage.getItem(TODO_STORAGE_KEY);
    if (dataFromStorage) {
      this.store$.dispatch(
        new TodoLoadAction({
          id: null,
          name: null,
          state: JSON.parse(dataFromStorage),
        })
      );
    }
  }
}
