import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarTarPage } from './agregar-tar.page';

describe('AgregarTarPage', () => {
  let component: AgregarTarPage;
  let fixture: ComponentFixture<AgregarTarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarTarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
