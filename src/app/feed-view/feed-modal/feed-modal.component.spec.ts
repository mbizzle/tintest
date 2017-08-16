import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedModalComponent } from './feed-modal.component';

describe('FeedModalComponent', () => {
  let component: FeedModalComponent;
  let fixture: ComponentFixture<FeedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
