/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PriedraPapelTijerasComponent } from './priedra-papel-tijeras.component';

describe('PriedraPapelTijerasComponent', () => {
  let component: PriedraPapelTijerasComponent;
  let fixture: ComponentFixture<PriedraPapelTijerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriedraPapelTijerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriedraPapelTijerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
