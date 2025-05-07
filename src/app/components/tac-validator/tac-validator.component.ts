import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tac-validator',
  imports: [CommonModule],
  templateUrl: './tac-validator.component.html',
  styleUrl: './tac-validator.component.css'
})
export class TacValidatorComponent {

  selectedFile: File | null = null;

  onFileSelected(event: Event): void { 
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    } else {
      this.selectedFile = null;
    }
  }

}
