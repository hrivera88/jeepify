import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'jp-media-box',
    templateUrl: './jp-media-box.component.html',
    styleUrls: ['./jp-media-box.component.css']
})

export class JP_MediaBoxComponent implements OnInit {
    
    @Input() title: string;
    @Input() backgroundImage: string;
    @Input() isPlaylist: boolean;
    
    constructor() {}
    
    ngOnInit() {

    }
}