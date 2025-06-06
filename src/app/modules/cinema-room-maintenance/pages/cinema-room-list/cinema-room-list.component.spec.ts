import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaRoomListComponent } from './cinema-room-list.component';

describe('CinemaRoomListComponent', () => {
  let component: CinemaRoomListComponent;
  let fixture: ComponentFixture<CinemaRoomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaRoomListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
