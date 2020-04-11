import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevisiteurComponent } from './updatevisiteur.component';

describe('UpdatevisiteurComponent', () => {
  let component: UpdatevisiteurComponent;
  let fixture: ComponentFixture<UpdatevisiteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatevisiteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
