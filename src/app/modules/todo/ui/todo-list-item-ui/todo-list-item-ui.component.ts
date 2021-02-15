import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.css'],
})
export class TodoListItemUiComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  delete: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  toggle: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  edit: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(): void {
    this.delete.emit();
  }

  onToggle(event): void {
    event.preventDefault();
    this.toggle.emit();
  }

  onEdit() {
    this.edit.emit();
  }
}
