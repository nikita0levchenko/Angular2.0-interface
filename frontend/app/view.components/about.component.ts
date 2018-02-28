import { Component} from '@angular/core';

@Component({
  selector: 'about-app',
  template: `
    <h1 align="center"><i>Создатели сайта</i></h1>
    <div style="float: left">
      <img src="../../assets/40aUwjWcZ3w.jpg">
      <p><b>Прохоров Артём Васильевич</b>- самый лучший Back-End программист в мире!</p>
      <p><i>e-mail: prokhorov.artem98@gmail.com</i></p>
    </div>
    <div style="float: right">
      <img src="../../assets/tgr3yabR4Mo.jpg">
      <p><b>Левченко Никита Олегович</b>- криворукое создание, ответственное за Front-End</p>
      <p><i>e-mail: nikita0levchenko@gmail.com</i></p>
    </div>
  `,
  styles:[`
  img{
    margin-left: 50px;}
  `]
})
export class AboutComponent { }
