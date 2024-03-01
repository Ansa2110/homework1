import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorText'
})
export class ColorTextPipe implements PipeTransform {
  transform(text: string, color: string): string {
    let colorBrackets = ""
    switch(color) {
      case "red":
        colorBrackets = "(red)";
        break;
      case "green":
        colorBrackets = "(green)";
        break;
      case "blue":
        colorBrackets = "(blue)";
        break;
    }
    return text + ' ' + colorBrackets;
  }
}
