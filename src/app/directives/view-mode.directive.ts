import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[viewMode]'
})
export class ViewModeDirective {

  constructor(public tRef: TemplateRef<any>) { }
  // TODO: Might neet to implement edit in place with a help of structural direcives
}
