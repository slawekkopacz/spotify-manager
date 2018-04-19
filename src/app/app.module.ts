import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TrackComponent } from './playlists/components/track/track.component';
import { PlaylistComponent } from './playlists/components/playlist/playlist.component';
import { PlaylistService } from './playlists/playlist.service';
import { PlaylistsModule } from './playlists/playlists.module';


@NgModule({
  declarations: [
  ],
  imports: [
    PlaylistsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
