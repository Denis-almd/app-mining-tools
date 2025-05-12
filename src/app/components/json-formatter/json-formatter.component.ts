import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-json-formatter',
  imports: [FormsModule, CommonModule],
  templateUrl: './json-formatter.component.html',
  styleUrl: './json-formatter.component.css'
})
export class JsonFormatterComponent {
  jsonInput: string = '';
  formattedJson: string | null = null;
  errorMessage: string | null = null;

  formatJson(): void {
    try {
      this.errorMessage = null;

      if (!this.jsonInput) {
        this.formattedJson =  this.formattedJson = 'JSON inválido. Por favor, corrija e tente novamente.';
        return;
      }
      
      let preparedJson = this.jsonInput.trim();

      preparedJson = preparedJson.replace(/'/g, '"');
      preparedJson = preparedJson.replace(/}\s*{/g, '},{');

      if (!preparedJson.startsWith('[') && !preparedJson.startsWith('{')) {
        preparedJson = `[{${preparedJson}}]`;
        console.log(preparedJson);
      }

      if (preparedJson.startsWith('{') && preparedJson.endsWith('}')) {
        preparedJson = '[' + preparedJson + ']';
      }
      
      const parsedJson = JSON.parse(preparedJson);
      this.formattedJson = JSON.stringify(parsedJson, null, 2);
      this.copyToClipboard();
    } catch (error) {
      this.formattedJson = 'JSON inválido. Por favor, corrija e tente novamente.';
    }
  }
    

  copyToClipboard(): void { 
    if (this.formattedJson) {
      navigator.clipboard.writeText(this.formattedJson).then(() => {
      }).catch(err => {
        console.error('Erro ao copiar o JSON: ', err);
      });
    } else {
      
    }
  }

  clearJson(): void {
    this.jsonInput = '';
    this.formattedJson = null;
    this.errorMessage = null;
  }
}