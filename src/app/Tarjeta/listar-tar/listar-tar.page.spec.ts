import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarTarPage } from './listar-tar.page';

describe('ListarTarPage', () => {
  let component: ListarTarPage;
  let fixture: ComponentFixture<ListarTarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarTarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
