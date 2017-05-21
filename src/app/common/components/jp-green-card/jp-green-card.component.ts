import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'jp-green-card',
    templateUrl: './jp-green-card.component.html',
    styleUrls: ['./jp-green-card.component.css', '../../styles/font-family.css']
})

export class JP_GreenCardComponent implements OnInit {
    @Input() icon: string;
    @Input() title: string;

    constructor() {
        
    }

    ngOnInit() {}

}