import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[editMode]'
})
export class EditModeDirective {

  constructor(public tRef: TemplateRef<any>) { }
  // TODO: Might neet to implement edit in place with a help of structural direcives
}
