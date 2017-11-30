import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFoodDetailsComponent } from './page-food-details.component';

describe('PageFoodDetailsComponent', () => {
  let component: PageFoodDetailsComponent;
  let fixture: ComponentFixture<PageFoodDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFoodDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
