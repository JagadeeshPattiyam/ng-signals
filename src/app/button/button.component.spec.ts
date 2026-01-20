import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ButtonComponent } from './button.component';


describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents(); 
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

// Input test
  it('should update UI when @Input changes', () => {
    fixture.componentRef.setInput('buttonType', 'primary');
   // component.buttonType = 'Angular';
    fixture.detectChanges();
    expect(component.buttonType()).toBe('primary');
  
  });
}
);