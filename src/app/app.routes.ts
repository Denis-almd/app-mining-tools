import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SugestoesComponent } from './pages/sugestoes/sugestoes.component';
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './components/main/main.component';
import { TimeCalculatorPageComponent } from './pages/time-calculator-page/time-calculator-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent, // Layout principal
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona para 'home'
      { path: 'home', component: HomeComponent },
      { path: 'sugestoes', component: SugestoesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'time-calculator', component: TimeCalculatorPageComponent },
    ],
  },
  { path: '**', redirectTo: 'home' }, // Redireciona rotas inválidas
];
