import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloghiComponent } from './cataloghi.component';

describe('CataloghiComponent', () => {
  let component: CataloghiComponent;
  let fixture: ComponentFixture<CataloghiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CataloghiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CataloghiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
