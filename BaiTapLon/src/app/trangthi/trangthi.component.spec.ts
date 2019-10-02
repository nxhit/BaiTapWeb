import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangthiComponent } from './trangthi.component';

describe('TrangthiComponent', () => {
  let component: TrangthiComponent;
  let fixture: ComponentFixture<TrangthiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangthiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
