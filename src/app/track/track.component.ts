import { Component, OnInit } from '@angular/core';
import { Track } from '../models/track.model';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  private track: Track = new Track('Hardcoded Title');

  constructor() {
  }

  ngOnInit() {
  }

}
