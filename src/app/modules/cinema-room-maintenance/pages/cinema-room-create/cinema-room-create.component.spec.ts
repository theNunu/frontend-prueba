import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaRoomCreateComponent } from './cinema-room-create.component';

describe('CinemaRoomCreateComponent', () => {
  let component: CinemaRoomCreateComponent;
  let fixture: ComponentFixture<CinemaRoomCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaRoomCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaRoomCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
