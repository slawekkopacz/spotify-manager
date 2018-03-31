import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TrackComponent } from './track/track.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistService } from './playlist.service';


@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
