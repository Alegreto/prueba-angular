import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraAlumnoComponent } from './muestra-alumno.component';

describe('MuestraAlumnoComponent', () => {
  let component: MuestraAlumnoComponent;
  let fixture: ComponentFixture<MuestraAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
