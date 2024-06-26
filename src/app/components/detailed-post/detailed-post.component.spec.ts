import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPostComponent } from './detailed-post.component';

describe('DetailedPostComponent', () => {
  let component: DetailedPostComponent;
  let fixture: ComponentFixture<DetailedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
