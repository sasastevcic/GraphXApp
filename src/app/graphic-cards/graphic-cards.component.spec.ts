import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardsComponent } from './graphic-cards.component';

describe('GraphicCardsComponent', () => {
  let component: GraphicCardsComponent;
  let fixture: ComponentFixture<GraphicCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
