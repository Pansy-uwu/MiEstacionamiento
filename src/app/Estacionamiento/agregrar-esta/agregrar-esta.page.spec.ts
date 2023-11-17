import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregrarEstaPage } from './agregrar-esta.page';

describe('AgregrarEstaPage', () => {
  let component: AgregrarEstaPage;
  let fixture: ComponentFixture<AgregrarEstaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregrarEstaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
