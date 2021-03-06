/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnagramaComponent } from './anagrama.component';

describe('AnagramaComponent', () => {
  let component: AnagramaComponent;
  let fixture: ComponentFixture<AnagramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnagramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
