import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlists/components/playlist/playlist.component';
import { TrackComponent } from './playlists/components/track/track.component';
import { PlaylistsComponent } from './playlists/components/playlists/playlists.component';
import { StoreModule } from '@ngrx/store';
import { playlistReducers } from './playlists/store/playlists.reducers';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TrackComponent,
        PlaylistComponent,
        PlaylistsComponent
      ],
      imports: [
        StoreModule.forRoot({
          playlist: playlistReducers
        })
      ],
      providers: []
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Playlists'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Playlists');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Playlists');
  }));
});
