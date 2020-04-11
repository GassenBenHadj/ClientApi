import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountlivreComponent } from './countlivre.component';

describe('CountlivreComponent', () => {
  let component: CountlivreComponent;
  let fixture: ComponentFixture<CountlivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountlivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountlivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
