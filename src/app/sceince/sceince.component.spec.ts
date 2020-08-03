import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceinceComponent } from './sceince.component';

describe('SceinceComponent', () => {
  let component: SceinceComponent;
  let fixture: ComponentFixture<SceinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
