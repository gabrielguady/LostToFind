import { AfterViewInit, Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {
  private static isFirstFocusApplied = false; // Controla se o foco foi aplicado no primeiro campo

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Verifica se o foco já foi aplicado a algum outro input
    if (!AutofocusDirective.isFirstFocusApplied) {
      this.el.nativeElement.focus(); // Aplica o foco neste input
      AutofocusDirective.isFirstFocusApplied = true; // Marca como aplicado
    }
  }
}
