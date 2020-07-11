import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[mwFavourite]'
})

export class FavoriteDirective {

  constructor() { }

  @HostBinding('class.is-favourite') isFavourite = true;
}
