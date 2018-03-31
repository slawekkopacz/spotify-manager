import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Playlist } from './models/playlist.model';
import 'rxjs/add/observable/of';

@Injectable()
export class PlaylistService {

  constructor() { }

  getMyPlaylists(): Observable<Playlist[]> {
    return Observable.of([
      { title: 'Playlist 1' },
      { title: 'Playlist 2' },
      { title: 'Playlist 3' },
    ]);
  }

}
