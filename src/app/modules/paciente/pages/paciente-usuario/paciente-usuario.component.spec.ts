import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteUsuarioComponent } from './paciente-usuario.component';

describe('PacienteUsuarioComponent', () => {
  let component: PacienteUsuarioComponent;
  let fixture: ComponentFixture<PacienteUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
