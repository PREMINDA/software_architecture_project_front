import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewItemComponent } from './add-new-item.component';

describe('AddNewItemComponent', () => {
  let component: AddNewItemComponent;
  let fixture: ComponentFixture<AddNewItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewItemComponent]
    });
    fixture = TestBed.createComponent(AddNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
