import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaylistService } from './playlist/playlist.service';
import { Playlist } from './shared/models/playlist.model';
import { Subject} from 'rxjs/Subject';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject();
  title = 'Playlists';
  playlists: Playlist[];

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.playlistService.getMyPlaylists()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(playlists => this.playlists = playlists);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  addNewList() {
    const playlist = new Playlist();
    playlist.title = 'New playlist';
    this.playlistService.createPlaylist(playlist);
  }
}
