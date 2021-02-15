import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHoverEffects]',
})
export class HoverEffectsDirective {
  @HostBinding('attr.area-label')
  label = 'This is an area label';

  @Input('appHoverEffects')
  color: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter', ['$event'])
  onHover(): void {
    this.setStyle(this.color);
  }

  @HostListener('mouseleave', ['$event'])
  onLeave(): void {
    this.setStyle(null);
  }

  setStyle(colorElem: string) {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      colorElem
    );
  }
}
