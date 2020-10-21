import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovazioniComponent } from './approvazioni.component';

describe('ApprovazioniComponent', () => {
  let component: ApprovazioniComponent;
  let fixture: ComponentFixture<ApprovazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
