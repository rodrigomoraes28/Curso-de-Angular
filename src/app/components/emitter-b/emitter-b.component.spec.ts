import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterBComponent } from './emitter-b.component';

describe('EmitterBComponent', () => {
  let component: EmitterBComponent;
  let fixture: ComponentFixture<EmitterBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitterBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitterBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
