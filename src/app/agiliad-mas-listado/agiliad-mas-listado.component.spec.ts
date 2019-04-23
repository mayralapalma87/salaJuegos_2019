import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgiliadMasListadoComponent } from './agiliad-mas-listado.component';

describe('AgiliadMasListadoComponent', () => {
  let component: AgiliadMasListadoComponent;
  let fixture: ComponentFixture<AgiliadMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgiliadMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgiliadMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
