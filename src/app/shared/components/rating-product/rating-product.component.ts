import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-product',
  template: `
    <mat-icon aria-hidden="false" *ngFor="let icon of icons" >{{icon}}</mat-icon>
  `,
  styleUrls: ['./rating-product.component.scss']
})
export class RatingProductComponent {

  @Input()
  public rating?: number = 0;

  constructor() { }

  get icons(): string[] {
    return new Array(5)
      .fill('star_outline')
      .fill('star', 0, this.rating || 0)
  }

}
