import { Action } from '@ngrx/store';

export const ADD_PLAYLIST = 'ADD_PLAYLIST';

export class AddPlaylistAction implements Action {
  readonly type: string = ADD_PLAYLIST;

  constructor(public payload: string) {
  }
}

export type PlaylistsActions = AddPlaylistAction;
