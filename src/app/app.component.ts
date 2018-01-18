import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styles: [require('./app.component.less')]
})
export class AppComponent {
  title = 'app';
}
