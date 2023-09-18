import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWrapperComponentComponent } from './page-wrapper.component.component';

describe('PageWrapperComponentComponent', () => {
  let component: PageWrapperComponentComponent;
  let fixture: ComponentFixture<PageWrapperComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageWrapperComponentComponent]
    });
    fixture = TestBed.createComponent(PageWrapperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
