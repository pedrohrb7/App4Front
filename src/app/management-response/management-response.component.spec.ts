import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementResponseComponent } from './management-response.component';

describe('ManagementResponseComponent', () => {
  let component: ManagementResponseComponent;
  let fixture: ComponentFixture<ManagementResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
