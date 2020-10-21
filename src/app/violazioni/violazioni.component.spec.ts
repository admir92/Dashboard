import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolazioniComponent } from './violazioni.component';

describe('ViolazioniComponent', () => {
  let component: ViolazioniComponent;
  let fixture: ComponentFixture<ViolazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
