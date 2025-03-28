import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TimeCalculatorComponent } from './components/time-calculator/time-calculator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimeCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-mining-tools';
}
