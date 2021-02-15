import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { todoReducer, TODO_REDUCER_NODE } from './store/todo/todo.reducer';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { RouterModule } from '@angular/router';
import { todoRoutes } from './routes';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import { FormsModule } from '@angular/forms';
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';
import { TodoListItemUiComponent } from './ui/todo-list-item-ui/todo-list-item-ui.component';
import { TodoListItemEditUiComponent } from './ui/todo-list-item-edit-ui/todo-list-item-edit-ui.component';
import { HoverEffectsDirective } from './directives/hover-effects.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { PleasePipePipe } from './pipes/please-pipe.pipe';
import { ComplitedPipe } from './pipes/complited.pipe';

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent,
    TodoListItemUiComponent,
    TodoListItemEditUiComponent,
    HoverEffectsDirective,
    MyIfDirective,
    PleasePipePipe,
    ComplitedPipe,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(todoRoutes),
    FormsModule,
  ],
})
export class TodoModule {}
