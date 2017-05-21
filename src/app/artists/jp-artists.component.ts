import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {JP_SafePipe} from '../common/pipes/jp-safe.pipe'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'jp-artists',
    styleUrls: ['./jp-artists.component.css'],
    templateUrl: './jp-artists.component.html'
})

export class JP_ArtistsComponent implements OnInit {
    artistImage: any;
    artistName: string;
    showOverlay: boolean;

    constructor(public sanitizer: DomSanitizer) {
        this.artistName = 'David Bowie';
        this.artistImage = sanitizer.bypassSecurityTrustStyle("url(./assets/bowie.jpg)");
    }

    toggleOverlay(view) {
        if(view) {
            var viewportOffsetTop = document.documentElement.scrollTop || document.body.scrollTop;
            var overlay = document.getElementsByTagName('jp-alphabet-overlay');
            overlay[0].setAttribute('style', 'top: ' + viewportOffsetTop + 'px; bottom: -' + viewportOffsetTop + 'px');
        }
        this.showOverlay = !this.showOverlay;
    }

    ngOnInit() {
        this.showOverlay = false;
    }

}