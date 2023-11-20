import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarTarPage } from './modificar-tar.page';

describe('ModificarTarPage', () => {
  let component: ModificarTarPage;
  let fixture: ComponentFixture<ModificarTarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificarTarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
