import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsShieldsComponent } from './teams-shields.component';

describe('TeamsShieldsComponent', () => {
  let component: TeamsShieldsComponent;
  let fixture: ComponentFixture<TeamsShieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsShieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsShieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
