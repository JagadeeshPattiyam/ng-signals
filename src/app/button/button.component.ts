import { Component, input, output } from '@angular/core';
import { SignalsService } from '../services/signals.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
buttonType  = input<string>('default');
sendBtnclick = output<string>();
constructor(private signals: SignalsService){}
onclick(){
   this.sendBtnclick.emit(this.buttonType ());
}

}
