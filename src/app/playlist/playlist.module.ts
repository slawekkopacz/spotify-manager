import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { TrackComponent } from './components/track/track.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistService } from './playlist.service';
import { BrowserModule } from '@angular/platform-browser';
import { PlaylistsComponent } from './components/playlists/playlists.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    PlaylistComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlaylistService],
  exports: [PlaylistsComponent]
})
export class PlaylistModule { }
