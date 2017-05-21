import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'jp-song',
    styleUrls: ['./jp-song.component.css'],
    templateUrl: './jp-song.component.html'
})

export class JP_SongComponent implements OnInit {
    @Input() saved: boolean;
    @Input() songTitle: string;
    @Input() songArtist: string;
    @Input() songAlbum: string;
    @Input() songLength: string;

    constructor() {
    }

    ngOnInit() {}

}