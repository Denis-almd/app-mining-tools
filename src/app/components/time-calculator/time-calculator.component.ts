import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './time-calculator.component.html',
  styleUrl: './time-calculator.component.css'
})
export class TimeCalculatorComponent {

  inputTime: string = '';
  result: string = '';
  errorMessage: string = '';

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const allowedChars = /^[0-9:]*$/;

    if (!allowedChars.test(value)) {
      input.value = value.replace(/[^0-9:]/g, '');
      return;
    }

    this.calcular();
  }

  calcular() {
    this.result = '';
    this.errorMessage = '';

    if (!this.inputTime) {
      this.result = '';
      this.errorMessage = '';
      return;
    }    
    
    if (this.inputTime.includes(':')) {
      this.convertToSeconds();
    } else {
      this.convertToTime();
    }

  }

  convertToSeconds(): void {    
    const timeParts = this.inputTime.split(':');

    if (timeParts.length > 3) {
      this.errorMessage = 'Formato inválido. Insira no formato HH:MM:SS.';
      return;
    }

    const inputedTimeHours = Number(timeParts[0]) || 0;
    const inputedTimeMinutes = Number(timeParts[1]) || 0;
    const inputedTimeSeconds = Number(timeParts[2]) || 0;

    const totalSeconds = (inputedTimeHours * 3600) + (inputedTimeMinutes * 60) + inputedTimeSeconds;
    //this.copyToClipboard(totalSeconds.toString());
    this.result = totalSeconds.toString() + ' Segundos';
  }

  convertToTime(): void {
    const seconds = Number(this.inputTime);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(remainingSeconds)}`;

    this.result = formattedTime;

    //this.copyToClipboard(formattedTime);
  }

  private pad(num: number): string {
    return num.toString().padStart(2, '0');
  }

  limpar() {
    this.inputTime = '';
    this.result = '';
    this.errorMessage = '';
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {

    }).catch(err => {
      console.error('Erro ao copiar o texto:', err);
    });
  }

}
