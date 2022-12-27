import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetriveProductComponent } from './retrieve-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

describe('RetriveProductComponent', () => {
  let component: RetriveProductComponent;
  let fixture: ComponentFixture<RetriveProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetriveProductComponent ] , imports:[BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetriveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
