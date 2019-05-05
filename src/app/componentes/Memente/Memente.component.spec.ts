/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MementeComponent } from './Memente.component';

describe('MementeComponent', () => {
  let component: MementeComponent;
  let fixture: ComponentFixture<MementeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MementeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MementeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
