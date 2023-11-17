import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarEstaPage } from './listar-esta.page';

describe('ListarEstaPage', () => {
  let component: ListarEstaPage;
  let fixture: ComponentFixture<ListarEstaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarEstaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
