import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaRoomUpdateComponent } from './cinema-room-update.component';

describe('CinemaRoomUpdateComponent', () => {
  let component: CinemaRoomUpdateComponent;
  let fixture: ComponentFixture<CinemaRoomUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaRoomUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaRoomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
