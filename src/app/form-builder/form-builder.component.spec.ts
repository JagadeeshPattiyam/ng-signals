import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderComponent } from './form-builder.component';

describe('FormBuilderComponent', () => {
 let component: FormBuilderComponent;
  let fixture: ComponentFixture<FormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuilderComponent] // standalone
    }).compileComponents();

    fixture = TestBed.createComponent(FormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 1️⃣ Form should be created
  it('should create form with 2 controls', () => {
    expect(component.userForm.contains('name')).toBeTrue();
    expect(component.userForm.contains('email')).toBeTrue();
  });

  // 2️⃣ Initial form values
  it('should have default empty values', () => {
    expect(component.userForm.value).toEqual({ name: '', email: '' });
  });

  // 3️⃣ Required field validation
  it('should make name control required', () => {
    const nameControl = component.userForm.get('name');
    nameControl?.setValue('');
    expect(nameControl?.valid).toBeFalse();
  });

  it('should make email required', () => {
    const emailControl = component.userForm.get('email');
    emailControl?.setValue('');
    expect(emailControl?.valid).toBeFalse();
  });

  // 4️⃣ Email validator check
  it('should validate email format', () => {
    const emailControl = component.userForm.get('email');
    emailControl?.setValue('invalidEmail');
    expect(emailControl?.valid).toBeFalse();

    emailControl?.setValue('test@gmail.com');
    expect(emailControl?.valid).toBeTrue();
  });

  // 5️⃣ Update values programmatically
  it('should update form values correctly', () => {
    component.userForm.setValue({ name: 'John', email: 'john@mail.com' });
    expect(component.userForm.value).toEqual({
      name: 'John',
      email: 'john@mail.com'
    });
  });

  // 6️⃣ Form should be valid when fields are correct
  it('should make form valid when both fields are filled correctly', () => {
    component.userForm.setValue({
      name: 'John',
      email: 'john@mail.com'
    });

    expect(component.userForm.valid).toBeTrue();
  });

  // 7️⃣ Trigger submit function
  it('should call onSubmitForm() when form submitted', () => {
    spyOn(component, 'onSubmitForm');

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit')); // submit form

    expect(component.onSubmitForm).toHaveBeenCalled();
  });
});
