import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IstruzioneComponent } from './istruzione.component';

describe('IstruzioneComponent', () => {
  let component: IstruzioneComponent;
  let fixture: ComponentFixture<IstruzioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IstruzioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IstruzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
