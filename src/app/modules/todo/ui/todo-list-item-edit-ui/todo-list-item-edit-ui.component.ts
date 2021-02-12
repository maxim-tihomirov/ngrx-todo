import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-list-item-edit-ui',
  templateUrl: './todo-list-item-edit-ui.component.html',
  styleUrls: ['./todo-list-item-edit-ui.component.css'],
})
export class TodoListItemEditUiComponent implements OnInit {
  name: string = '';

  @Input()
  todo: Todo;

  @Output()
  edit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.name = this.todo.name;
  }

  onEdit() {
    if (this.name) {
      this.edit.emit(this.name);
    }
  }

  onCancel() {
    this.name = this.todo.name;
  }
}
