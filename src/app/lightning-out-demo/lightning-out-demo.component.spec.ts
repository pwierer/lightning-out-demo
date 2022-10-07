import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningOutDemoComponent } from './lightning-out-demo.component';

describe('LightningOutDemoComponent', () => {
  let component: LightningOutDemoComponent;
  let fixture: ComponentFixture<LightningOutDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightningOutDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightningOutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
