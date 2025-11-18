import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input() smallCards: SmallCard[] = [];
  readonly cardTitle = input<string>();
  readonly photoCover = input<string>();
  readonly cardTitleLink = input<string>();
  constructor() {}
}

export class SmallCard {
  cardTitle: string | undefined;
  photoCover: string | undefined;
  cardTitleLink: string | undefined;
}
