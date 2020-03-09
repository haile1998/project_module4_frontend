import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSongComponent } from './management-song.component';

describe('ManagementSongComponent', () => {
  let component: ManagementSongComponent;
  let fixture: ComponentFixture<ManagementSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
