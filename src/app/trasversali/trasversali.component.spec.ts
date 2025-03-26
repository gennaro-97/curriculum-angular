import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasversaliComponent } from './trasversali.component';

describe('TrasversaliComponent', () => {
  let component: TrasversaliComponent;
  let fixture: ComponentFixture<TrasversaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrasversaliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrasversaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
