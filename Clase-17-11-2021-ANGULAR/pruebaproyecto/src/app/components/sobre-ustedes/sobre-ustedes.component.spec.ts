import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreUstedesComponent } from './sobre-ustedes.component';

describe('SobreUstedesComponent', () => {
  let component: SobreUstedesComponent;
  let fixture: ComponentFixture<SobreUstedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreUstedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreUstedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
