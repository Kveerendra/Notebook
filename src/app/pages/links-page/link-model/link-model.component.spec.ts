import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkModelComponent } from './link-model.component';

describe('LinkModelComponent', () => {
  let component: LinkModelComponent;
  let fixture: ComponentFixture<LinkModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
