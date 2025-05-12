import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './components/main/main.component';
import { JsonFormatterComponent } from './components/json-formatter/json-formatter.component';
import { TimeCalculatorComponent } from './components/time-calculator/time-calculator.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent, // Layout principal
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona para 'home'
      { path: 'home', component: HomeComponent },
      { path: 'time-calculator', component: TimeCalculatorComponent },
      { path: 'json-formatter', component:  JsonFormatterComponent}
    ],
  },
  { path: '**', redirectTo: '' }, // Redireciona rotas inválidas
];
