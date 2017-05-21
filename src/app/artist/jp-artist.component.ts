import {Component} from '@angular/core';

@Component({
    selector: 'jp-artist',
    styleUrls: ['/jp-artist.component.css'],
    templateUrl: './jp-artist.component.html'
})

export class JP_ArtistComponent {
    playButtonIcon = 'green-play';
    playButtonText = 'Play';
    saveButtonIcon = 'plus';
    saveButtonText = 'Save';
    saved = true;
    songTitle = 'Irish Rover';
    songLength = '3:44';
}