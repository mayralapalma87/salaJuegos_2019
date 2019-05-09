/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavJuegosComponent } from './navJuegos.component';

describe('NavJuegosComponent', () => {
  let component: NavJuegosComponent;
  let fixture: ComponentFixture<NavJuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavJuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
