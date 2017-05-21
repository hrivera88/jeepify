import {Component} from '@angular/core';

@Component({
    selector: 'jp-songs',
    styleUrls: ['./jp-songs.component.css'],
    templateUrl: './jp-songs.component.html'
})

export class JP_SongsComponent {
    buttonText: string;
    buttonColor: string;
    buttonTextColor: string;
    saved: boolean;
    songArtist: string;
    songTitle: string;
    songAlbum: string;
    songLength: string;

    constructor() {
        // Shuffle Button
        this.buttonText = 'Say No Mo Fam';
        this.buttonColor = '#474747';
        this.buttonTextColor = '#fff';
        // Song Component
        this.saved = false;
        this.songTitle = 'Despacito';
        this.songArtist = 'Led Zeppelin';
        this.songAlbum = 'Take Off Your Pants And Jacket';
        this.songLength = '3:44';
    }



}