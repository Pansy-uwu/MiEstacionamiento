import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificaDatosPage } from './modifica-datos.page';

describe('ModificaDatosPage', () => {
  let component: ModificaDatosPage;
  let fixture: ComponentFixture<ModificaDatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificaDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
