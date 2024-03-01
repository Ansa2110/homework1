import { Component} from '@angular/core';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  inputValue = "";
  color = "";
  savedText:{text: string, color: string}[] = []
  saveText()
  {
     this.savedText.push({text:this.inputValue, color: this.color})
     this.inputValue = ""
     this.color = ""
  }
  checkInput() {
    if(this.inputValue == "")
    {
      this.color = "";
    }
    else if (/^[a-zA-Z0-9]*$/.test(this.inputValue) == false)
    {
      this.color = "red";
    }
    else if (isNaN(Number(this.inputValue)) == false)
    {
        const number = Number(this.inputValue);
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++)
        {
          if (number % i === 0)
          {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          this.color = "blue";
        } else {
          this.color = "green";
        }
    }
 }

}