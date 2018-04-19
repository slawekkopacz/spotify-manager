import { Action } from '@ngrx/store';
import { Playlist } from '../../shared/models/playlist.model';
import * as ActionTypes from './playlist.actions';

const initialState = {
  playlists: [
    {
      title: 'Playlist from store 1',
      tracks: []
    },
    {
      title: 'Playlist from store 2',
      tracks: []
    }
  ]
};

export function playlistReducers(state = initialState, action: ActionTypes.PlaylistActions) {
  switch (action.type) {
    case ActionTypes.ADD_PLAYLIST:
      return {
        ...state,
        playlists: [...state.playlists, new Playlist(action.payload)]
      };

    default:
      return state;
  }
}
