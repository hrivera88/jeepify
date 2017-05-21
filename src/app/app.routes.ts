import { Routes } from '@angular/router';

//Hal's Component
import { JP_HomeComponent } from './home/jp-home.component';
import {JP_ExploreComponent} from './explore/jp-explore.component';
import {JP_SongsComponent} from './songs/jp-songs.component';
import {JP_NowPlayingComponent} from './now-playing/jp-now-playing.component';
import {JP_ArtistsComponent} from './artists/jp-artists.component';
import {JP_ArtistComponent} from './artist/jp-artist.component';
import {JP_SearchResultsComponent} from './search-results/jp-search-results.component';
import {JP_PlaylistComponent} from './playlist/jp-playlist.component';
import {JP_AuthComponent} from './auth/jp-auth.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: JP_HomeComponent },
  { path: 'explore', component: JP_ExploreComponent },
  { path: 'songs', component: JP_SongsComponent },
  { path: 'now-playing', component: JP_NowPlayingComponent },
  { path: 'artists', component: JP_ArtistsComponent },
  { path: 'artist', component: JP_ArtistComponent },
  { path: 'search-results', component: JP_SearchResultsComponent },
  { path: 'search-results/:category', component: JP_SearchResultsComponent },
  { path: 'playlist', component: JP_PlaylistComponent },
  { path: 'auth', component: JP_AuthComponent } 
];

