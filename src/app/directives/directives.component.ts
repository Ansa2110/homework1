import { Component} from '@angular/core';
import { FormControl} from '@angular/forms';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent{

  myForm = new FormControl('');
  color = "";
  savedText:{text: string, color: string}[] = []

  inputValue: string = this.myForm.value || '';

  saveText()
  {
     this.inputValue = this.myForm.value || ""
     this.savedText.push({text:this.inputValue, color: this.color})
     this.inputValue = ""
     this.color = ""
  }
  checkInput() {
    this.inputValue = this.myForm.value || ""
    if(this.inputValue == "")
    {
      this.color = "";
    }
    else if (!(/^[a-zA-Z0-9]*$/.test(this.inputValue)))
    {
      this.color = "red";
    }
    else if (!(isNaN(Number(this.inputValue))) && Number(this.inputValue)!==0 && Number(this.inputValue)!==1)
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
    else
    {
      this.color = "";
    }
 }

}