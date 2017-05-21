import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TruncateModule } from 'ng2-truncate';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {Ng2SimplePageScrollModule} from 'ng2-simple-page-scroll';

//Jeepify Components
import {JP_TopBarComponent} from './common/components/top-bar.component/jp-top-bar.component';
import {JP_HomeComponent} from './home/jp-home.component';
import {JP_GreenCardComponent} from './common/components/jp-green-card/jp-green-card.component';
import {JP_ControlsComponent} from './common/components/jp-controls/jp-controls.component';
import {JP_ButtonComponent} from './common/components/jp-button/jp-button.component';
import {JP_MediaPlayerComponent} from './common/components/jp-media-player/jp-media-player.component';
import {JP_ExploreComponent} from './explore/jp-explore.component';
import {JP_SearchComponent} from './common/components/jp-search/jp-search.component';
import {JP_MediaBoxComponent} from './common/components/jp-media-box/jp-media-box.component';
import {JP_SongsComponent} from './songs/jp-songs.component';
import {JP_SongComponent} from './common/components/jp-song/jp-song.component';
import {JP_NowPlayingComponent} from './now-playing/jp-now-playing.component';
import {JP_VolumeComponent} from './common/components/jp-volume/jp-volume.component';
import {JP_ArtistsComponent} from './artists/jp-artists.component';
import {JP_AlphabetOverlayComponent} from './common/components/jp-alphabet-overlay/jp-alphabet-overlay.component';
import {JP_SpacerComponent} from './common/components/jp-spacer/jp-spacer.component';
import {JP_ArtistComponent} from './artist/jp-artist.component';
import {JP_SearchResultsComponent} from './search-results/jp-search-results.component';
import {JP_FilterBoxComponent} from './common/components/jp-filter-box/jp-filter-box.component';
import {JP_PlaylistComponent} from './playlist/jp-playlist.component';
import {JP_AuthComponent} from './auth/jp-auth.component';
import {JP_InputOverlayComponent} from './common/components/jp-input-overlay/jp-input-overlay.component';

// Jeepify Pipes
import {JP_SafePipe} from './common/pipes/jp-safe.pipe';

//Jeepify Services
import {JP_SearchService} from './search-results/jp-search.service';

@NgModule({
  declarations: [
    //JP Components
    JP_HomeComponent,
    AppComponent,
    JP_TopBarComponent,
    JP_GreenCardComponent,
    JP_ControlsComponent,
    JP_ButtonComponent,
    JP_MediaPlayerComponent,
    JP_ExploreComponent,
    JP_SearchComponent,
    JP_MediaBoxComponent,
    JP_SongsComponent,
    JP_SongComponent,
    JP_NowPlayingComponent,
    JP_VolumeComponent,
    JP_ArtistsComponent,
    JP_AlphabetOverlayComponent,
    JP_SpacerComponent,
    JP_ArtistComponent,
    JP_SearchResultsComponent,
    JP_FilterBoxComponent,
    JP_PlaylistComponent,
    JP_AuthComponent,
    JP_InputOverlayComponent,
    // JP Pipes
    JP_SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TruncateModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    Ng2SimplePageScrollModule.forRoot()
  ],
  providers: [
    JP_SearchService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
