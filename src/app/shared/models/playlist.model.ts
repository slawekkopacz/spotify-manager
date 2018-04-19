import { Track } from './track.model';

export class Playlist {
  title: string;
  tracks: Track[];

  constructor(title: string) {
    this.title = title;
    this.tracks = [];
  }
}
