import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playlist } from './models/playlist.model';
import 'rxjs/add/observable/of';

@Injectable()
export class PlaylistService {

  playlists: Playlist[] = [
    { title: 'Playlist 1',
      tracks: [
        { title: 'Track 1' },
        { title: 'Track 2' },
        { title: 'Track 3' }
      ] },
    { title: 'Playlist 2',
    tracks: [
      { title: 'Track 11' },
      { title: 'Track 22' },
      { title: 'Track 33' }
    ] },
    { title: 'Playlist 3',
    tracks: [
      { title: 'Track 111' },
      { title: 'Track 222' },
      { title: 'Track 333' }
    ] },
  ];

  constructor() { }

  getMyPlaylists(): Observable<Playlist[]> {
    return Observable.of(this.playlists);
  }

  createPlaylist(playlist: Playlist): boolean {
    this.playlists.push(playlist);
    return true;
  }
}
