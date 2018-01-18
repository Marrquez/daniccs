import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [require('./home.component.less')]
})
export class HomeComponent {
  title = 'Home component 98765';
}
