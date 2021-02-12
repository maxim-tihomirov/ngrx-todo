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
  delete: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  toggle: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(): void {
    this.delete.emit();
  }

  onToggle(event): void {
    event.preventDefault();
    this.toggle.emit();
  }
}
