import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { TrackComponent } from './components/track/track.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistService } from './playlist.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [PlaylistComponent]
})
export class PlaylistModule { }
