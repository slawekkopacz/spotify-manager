import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TrackComponent } from './playlist/components/track/track.component';
import { PlaylistComponent } from './playlist/components/playlist/playlist.component';
import { PlaylistService } from './playlist/playlist.service';
import { PlaylistModule } from './playlist/playlist.module';


@NgModule({
  declarations: [
  ],
  imports: [
    PlaylistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
