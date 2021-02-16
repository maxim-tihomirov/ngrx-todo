import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreateFormUiComponent } from './todo-create-form-ui.component';

fdescribe('TodoCreateFormUiComponent', () => {
  let component: TodoCreateFormUiComponent;

  beforeEach(() => {
    component = new TodoCreateFormUiComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name should be empty', () => {
    expect(component.name).toBe('');
  });

  it('should not be emit', () => {
    component.create.subscribe((res: string) => {
      expect(res).toBe('');
    });
    component.onCreate();
  });

  it('should do emit', () => {
    component.name = 'name';
    component.create.subscribe((res: string) => {
      expect(res).toBe(component.name);
    });
    component.onCreate();
  });

  it('name should be empty after click', () => {
    component.name = 'name';
    component.onCreate();
    expect(component.name).toBe('');
  });
});
