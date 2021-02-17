import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoCreateFormUiComponent } from './todo-create-form-ui.component';

fdescribe('TodoCreateFormUiComponent', () => {
  let fixture: ComponentFixture<TodoCreateFormUiComponent>;
  let component: TodoCreateFormUiComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCreateFormUiComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(TodoCreateFormUiComponent);
    component = fixture.componentInstance;
    component.create.emit = jasmine.createSpy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name should be empty', () => {
    expect(component.name).toBe('');
  });

  it('should not be emit', () => {
    component.onCreate();
    expect(component.create.emit).not.toHaveBeenCalled();
  });

  it('should do emit', () => {
    component.name = 'name';
    component.onCreate();
    expect(component.create.emit).toHaveBeenCalled();
  });

  it('name should be empty after click', () => {
    component.name = 'name';
    component.onCreate();
    expect(component.name).toBe('');
  });

  it('should change name in class from DOM', () => {
    const formElement: HTMLElement = fixture.debugElement.nativeElement;
    const input = formElement.querySelector('input');
    input.value = 'name';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.value).toBe(component.name);
  });

  it('button should be disabled', () => {
    const formElement: HTMLElement = fixture.debugElement.nativeElement;
    const button = formElement.querySelector('button');
    fixture.detectChanges();
    expect(button.disabled).toBeTruthy();
  });
});
