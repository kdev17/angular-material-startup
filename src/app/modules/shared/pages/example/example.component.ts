import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  date = new FormControl();

  constructor() { }

  ngOnInit() {
  }
  showDate() {
    console.log(this.date.value);
  }
}
