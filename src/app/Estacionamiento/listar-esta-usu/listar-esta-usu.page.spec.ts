import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarEstaUsuPage } from './listar-esta-usu.page';

describe('ListarEstaUsuPage', () => {
  let component: ListarEstaUsuPage;
  let fixture: ComponentFixture<ListarEstaUsuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarEstaUsuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
