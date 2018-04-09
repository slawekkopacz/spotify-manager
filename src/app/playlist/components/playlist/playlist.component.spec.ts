import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PlaylistComponent } from './playlist.component';
import { Playlist } from '../../../shared/models/playlist.model';
import { TrackComponent } from '../track/track.component';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlaylistComponent,
        TrackComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    component.playlist = {
      title: 'Rock and Roll',
      tracks: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render playlist title in <p>', () => {
    const debugElement: DebugElement = fixture.debugElement.query(By.css('p'));
    const htmlElement: HTMLElement = debugElement.nativeElement;
    const paragraphText = htmlElement.textContent;

    expect(paragraphText).toEqual('Rock and Roll');
  });
});
