import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidationFormPage } from './validation-form.page';

describe('ValidationFormPage', () => {
  let component: ValidationFormPage;
  let fixture: ComponentFixture<ValidationFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
