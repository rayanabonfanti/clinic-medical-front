import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoSucessoComponent } from './solicitacao-sucesso.component';

describe('SolicitacaoSucessoComponent', () => {
  let component: SolicitacaoSucessoComponent;
  let fixture: ComponentFixture<SolicitacaoSucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoSucessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaoSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
