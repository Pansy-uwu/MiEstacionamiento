import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarEstaPage } from './modificar-esta.page';

describe('ModificarEstaPage', () => {
  let component: ModificarEstaPage;
  let fixture: ComponentFixture<ModificarEstaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificarEstaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
