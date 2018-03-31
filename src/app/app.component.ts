import { Component, OnInit } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { Playlist } from './models/playlist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  playlists: Playlist[];

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.playlistService.getMyPlaylists()
      .subscribe(playlists => this.playlists = playlists);
  }
}
