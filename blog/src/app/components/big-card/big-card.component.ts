import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  photoCover: string = '';
  cardTitle: string = '';
  cardDescription: string = '';

  constructor() {}

  ngOnInit(): void {
    this.photoCover = 'https://miro.medium.com/1*Kj8Eq401fP2ecTY8r9B89Q.png';
    this.cardTitle = 'Nova Versão Angular';
    this.cardDescription =
      'O Angular é um framework para construção de aplicações web.';
  }
}
