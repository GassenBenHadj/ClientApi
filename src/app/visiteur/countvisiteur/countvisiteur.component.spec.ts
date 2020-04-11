import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountvisiteurComponent } from './countvisiteur.component';

describe('CountvisiteurComponent', () => {
  let component: CountvisiteurComponent;
  let fixture: ComponentFixture<CountvisiteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountvisiteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountvisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
