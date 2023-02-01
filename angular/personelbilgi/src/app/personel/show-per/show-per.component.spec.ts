import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPerComponent } from './show-per.component';

describe('ShowPerComponent', () => {
  let component: ShowPerComponent;
  let fixture: ComponentFixture<ShowPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
