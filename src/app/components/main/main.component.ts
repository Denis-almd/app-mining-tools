import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppFooterComponent } from '../app-footer/app-footer.component';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, AppHeaderComponent, AppFooterComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {

}
