import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignalsService } from '../services/signals.service';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {
  userForm: FormGroup
 constructor(private fb: FormBuilder, private signals: SignalsService) {
    this.userForm = this.fb.group({
    name: ['',  [Validators.required]],
    email:['', [Validators.email, Validators.required]],
  });
 }

onSubmitForm(){
  this.signals.setFormData(this.userForm.value);
}
}
