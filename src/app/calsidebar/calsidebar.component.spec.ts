import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalsidebarComponent } from './calsidebar.component';

describe('CalsidebarComponent', () => {
  let component: CalsidebarComponent;
  let fixture: ComponentFixture<CalsidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalsidebarComponent]
    });
    fixture = TestBed.createComponent(CalsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
