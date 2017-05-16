import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    $(document).ready(function(){
      alert('funziona');
    });
  }
}
