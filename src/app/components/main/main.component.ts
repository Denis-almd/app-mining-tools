import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//components
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
})
export class MainComponent {

}
