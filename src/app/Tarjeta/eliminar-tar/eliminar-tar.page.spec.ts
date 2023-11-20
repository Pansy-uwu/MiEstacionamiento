import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarTarPage } from './eliminar-tar.page';

describe('EliminarTarPage', () => {
  let component: EliminarTarPage;
  let fixture: ComponentFixture<EliminarTarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EliminarTarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
