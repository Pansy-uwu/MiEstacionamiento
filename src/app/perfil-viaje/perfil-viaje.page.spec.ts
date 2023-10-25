import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilViajePage } from './perfil-viaje.page';

describe('PerfilViajePage', () => {
  let component: PerfilViajePage;
  let fixture: ComponentFixture<PerfilViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
