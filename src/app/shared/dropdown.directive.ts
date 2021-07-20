import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
//add css class when the element it sits on is clicked and remove the class once is clicked again
  private isMouseInside: boolean = false;
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
  }

  @HostListener('document:click') onDocumentClick() {
    if (!this.isMouseInside)
      this.isOpen = false;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isMouseInside = false;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isMouseInside = true;
  }

  constructor() { }

}
