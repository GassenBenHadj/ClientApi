import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletevisiteurComponent } from './deletevisiteur.component';

describe('DeletevisiteurComponent', () => {
  let component: DeletevisiteurComponent;
  let fixture: ComponentFixture<DeletevisiteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletevisiteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletevisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
