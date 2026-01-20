import { Component, effect } from '@angular/core';
import { SignalsService } from '../services/signals.service';
import { ButtonComponent } from '../button/button.component';
import { FormBuilderComponent } from '../form-builder/form-builder.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [ButtonComponent, FormBuilderComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
 
constructor(public signals: SignalsService){
  effect(()=>{
  console.log("Form Data Updated:", this.formData());
});



const ids = Array.from({ length: 50000 }, (_, i) => i); // huge data
const idSet = new Set(ids);
const target = 49999; // last element

console.time("Array includes");
ids.includes(target);
console.timeEnd("Array includes");

console.time("Set has");
idSet.has(target);
console.timeEnd("Set has");
}
showBoxSignal = this.signals.buttonCLicked; // get signal
UserList = this.signals.getUser; // get signal

formData = this.signals.getformData; // get signal

fromChild(event:string){
  switch(event){
    case 'UpdateUser':
      this.signals.updateUserData();
      break;
    case 'getuser':
      this.signals.getUserData();
      break;
  }
}
}

