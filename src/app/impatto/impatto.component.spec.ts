import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpattoComponent } from './impatto.component';

describe('ImpattoComponent', () => {
  let component: ImpattoComponent;
  let fixture: ComponentFixture<ImpattoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpattoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
