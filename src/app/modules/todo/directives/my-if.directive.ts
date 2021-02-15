import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]',
})
export class MyIfDirective {
  private hasView = false;

  constructor(
    private tamplateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set appMyIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.tamplateRef);
      // this.hasView = true;
    } else {
      this.viewContainer.clear();
    }
  }
}
