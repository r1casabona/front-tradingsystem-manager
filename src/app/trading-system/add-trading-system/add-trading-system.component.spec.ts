import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTradingSystemComponent } from './add-trading-system.component';

describe('AddTradingSystemComponent', () => {
  let component: AddTradingSystemComponent;
  let fixture: ComponentFixture<AddTradingSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTradingSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTradingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
