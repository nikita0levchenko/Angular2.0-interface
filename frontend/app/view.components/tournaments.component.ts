import { Component } from '@angular/core';

@Component({
  selector:'teams-app',
  template: `
    <h1><i>О турнирах</i></h1>
    <p>Здесь будут появляться списки турниров</p>
  `,
  styles:[`
    h1{text-align: center}
    p{text-align: center}
  `]
})
export class TournamentsComponent{}
