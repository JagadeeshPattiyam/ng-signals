import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  dynamicform: FormGroup

  constructor(private fb: FormBuilder) { 
 this.dynamicform = this.fb.group({
    name: [''],
    skills: this.fb.array([]),
  });

 }
 
  // Get skills as FormArray
  get skills(): FormArray {
    return this.dynamicform.get('skills') as FormArray;
  }

  // Add new skill input
  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

  // Remove skill input
  removeSkill(index:number) {
    this.skills.removeAt(index);
  }

  submitForm() {
    console.log(this.dynamicform.value);
  }

}
