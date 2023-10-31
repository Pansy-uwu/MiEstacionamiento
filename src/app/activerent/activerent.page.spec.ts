import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiverentPage } from './activerent.page';

describe('ActiverentPage', () => {
  let component: ActiverentPage;
  let fixture: ComponentFixture<ActiverentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActiverentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
