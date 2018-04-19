import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsComponent } from './playlists.component';
import { PlaylistComponent } from '../playlist/playlist.component';
import { TrackComponent } from '../track/track.component';
import { StoreModule } from '@ngrx/store';
import { playlistReducers } from '../../store/playlists.reducers';

describe('PlaylistsComponent', () => {
  let component: PlaylistsComponent;
  let fixture: ComponentFixture<PlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          playlist: playlistReducers
        })
      ],
      providers: [],
      declarations: [
        TrackComponent,
        PlaylistComponent,
        PlaylistsComponent,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
