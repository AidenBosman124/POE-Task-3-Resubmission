import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinDisplayComponent } from './bulletin-display.component';

describe('BulletinDisplayComponent', () => {
  let component: BulletinDisplayComponent;
  let fixture: ComponentFixture<BulletinDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletinDisplayComponent]
    });
    fixture = TestBed.createComponent(BulletinDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
