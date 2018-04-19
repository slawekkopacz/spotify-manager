import { Component, OnInit, OnDestroy } from '@angular/core';
import { Playlist } from '../../../shared/models/playlist.model';
import { Subject} from 'rxjs/Subject';
import { PlaylistService } from '../../playlist.service';
import 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as PlaylistActions from '../../store/playlist.actions';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject();
  playlists: Playlist[];

  constructor(private store: Store<{playlist: {playlists: Playlist[]}}>) {
  }

  ngOnInit() {
      this.store.select('playlist')
      .takeUntil(this.ngUnsubscribe)
      .subscribe(s => this.playlists = s.playlists);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  addNewList() {
    this.store.dispatch(new PlaylistActions.AddPlaylistAction('New through store'));
  }

}
