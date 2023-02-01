import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPerComponent } from './add-edit-per.component';

describe('AddEditPerComponent', () => {
  let component: AddEditPerComponent;
  let fixture: ComponentFixture<AddEditPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
