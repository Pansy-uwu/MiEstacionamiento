import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnCursoPage } from './en-curso.page';

describe('EnCursoPage', () => {
  let component: EnCursoPage;
  let fixture: ComponentFixture<EnCursoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
