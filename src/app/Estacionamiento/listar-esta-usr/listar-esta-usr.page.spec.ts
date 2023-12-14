import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ListarEstaUsrPage } from './listar-esta-usr.page';

describe('ListarEstaUsrPage', () => {
  let component: ListarEstaUsrPage;
  let fixture: ComponentFixture<ListarEstaUsrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarEstaUsrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
