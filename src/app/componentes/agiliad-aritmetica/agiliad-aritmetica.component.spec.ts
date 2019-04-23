import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgiliadAritmeticaComponent } from './agiliad-aritmetica.component';

describe('AgiliadAritmeticaComponent', () => {
  let component: AgiliadAritmeticaComponent;
  let fixture: ComponentFixture<AgiliadAritmeticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgiliadAritmeticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgiliadAritmeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
