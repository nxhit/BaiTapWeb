import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuadoithongtinComponent } from './suadoithongtin.component';

describe('SuadoithongtinComponent', () => {
  let component: SuadoithongtinComponent;
  let fixture: ComponentFixture<SuadoithongtinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuadoithongtinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuadoithongtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
