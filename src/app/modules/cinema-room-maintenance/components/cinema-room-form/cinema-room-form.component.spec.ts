import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaRoomFormComponent } from './cinema-room-form.component';

describe('CinemaRoomFormComponent', () => {
  let component: CinemaRoomFormComponent;
  let fixture: ComponentFixture<CinemaRoomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaRoomFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaRoomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
