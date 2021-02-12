import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.css'],
})
export class TodoListUiComponent implements OnInit {
  @Input()
  todoList: Todo[] = [];

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  toggle: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  edit: EventEmitter<{ id: number; name: string }> = new EventEmitter<{
    id: number;
    name: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(id: number): void {
    this.delete.emit(id);
  }

  onToggle(id: number): void {
    this.toggle.emit(id);
  }

  onEdit(name: string, id: number) {
    this.edit.emit({ id, name });
  }
}
