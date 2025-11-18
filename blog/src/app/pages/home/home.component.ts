import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import {
  SmallCard,
  SmallCardComponent,
} from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  smallCards: SmallCard[] = [];

  constructor() {}

  ngOnInit(): void {
    this.smallCards = [];
    for (let i = 0; i < 5; i++) {
      let card = new SmallCard();
      card.photoCover =
        'https://angular.io/assets/images/logos/angular/angular.png';
      card.cardTitle = 'Aprendendo Angular';
      card.cardTitleLink = 'https://angular.io/';
      this.smallCards.push(card);
    }
  }
}
