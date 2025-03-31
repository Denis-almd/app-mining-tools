import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Componentes
import { TimeCalculatorComponent, } from './components/time-calculator/time-calculator.component';
import { TacValidatorComponent } from './components/tac-validator/tac-validator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimeCalculatorComponent, TacValidatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-mining-tools';

  
}
