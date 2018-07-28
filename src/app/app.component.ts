import { Component } from '@angular/core';
import { FormControl } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  date: FormControl;

  showDate() {
    console.log(this.date.value);
  }
}
