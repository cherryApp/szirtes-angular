import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Awesome App';
  counter = 0;

  constructor() {
    setInterval( () => {
      this.counter++;
    }, 10000);
  }

  getButtonStyles() {
    return {
      'btn-sm': this.counter % 5 === 0,
      'btn-primary': this.counter % 7 === 0,
      'btn-success': this.counter % 7 !== 0,
    };
  }

  resetCounter(): void {
    this.counter = 0;
  }

}
