import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { TrackComponent } from './components/track/track.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistService } from './playlist.service';
import { BrowserModule } from '@angular/platform-browser';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { StoreModule } from '@ngrx/store';
import { playlistReducers } from './store/playlists.reducers';

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    PlaylistComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      playlist: playlistReducers
    })
  ],
  providers: [PlaylistService],
  exports: [PlaylistsComponent]
})
export class PlaylistsModule { }
