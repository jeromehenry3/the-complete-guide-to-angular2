import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
  styles: [`
    h3 {
      color: darkblue;
    }
  `]
})
export class AppComponent {
  @Input() name: string;
}
