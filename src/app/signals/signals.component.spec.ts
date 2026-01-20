import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsComponent } from './signals.component';

describe('SignalsComponent', () => {
  let component: SignalsComponent;
  let fixture: ComponentFixture<SignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get signalValue should return the current value of the signal', () => {
    component.UserList.set([{ id: 1, name: 'Test User' }]);
    expect(component.UserList()).toEqual([{ id: 1, name: 'Test User' }]);
  });
});
