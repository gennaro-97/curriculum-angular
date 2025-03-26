import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicheComponent } from './tecniche.component';

describe('TecnicheComponent', () => {
  let component: TecnicheComponent;
  let fixture: ComponentFixture<TecnicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnicheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
