import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageDialogComponent } from './product-image-dialog.component';

describe('ProductImageDialogComponent', () => {
  let component: ProductImageDialogComponent;
  let fixture: ComponentFixture<ProductImageDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductImageDialogComponent]
    });
    fixture = TestBed.createComponent(ProductImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
