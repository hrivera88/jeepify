import {Component} from '@angular/core';

@Component({
    selector: 'jp-playlist',
    templateUrl: './jp-playlist.component.html',
    styleUrls: ['/jp-playlist.component.css']
})

export class JP_PlaylistComponent {
    saved: boolean = false;
    songTitle: string = "High Balls";
    songArtist: string = "Guttermouth";
    songAlbum: string = "Hit Machine";
    songLength: string = "3:45";

    playButtonIcon = 'green-play';
    playButtonText = 'Play';
    followingButtonIcon = 'plus';
    followingButtonText = 'Following';
}
