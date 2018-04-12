import { Component, OnInit, OnDestroy } from '@angular/core';
import { Playlist } from '../../../shared/models/playlist.model';
import { Subject} from 'rxjs/Subject';
import { PlaylistService } from '../../playlist.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject();
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
