import { Component} from '@angular/core';

@Component({
  selector: 'not-found-app',
  template: `<h1><i>Страница не найдена</i></h1>`,
  styles:[`
  h1{text-align: center;}
  `]
})
export class NotFoundComponent { }
