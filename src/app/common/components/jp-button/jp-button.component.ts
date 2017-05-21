import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'jp-button',
    templateUrl: './jp-button.component.html',
    styleUrls: ['./jp-button.component.css']
})

export class JP_ButtonComponent implements OnInit {
    @Input() icon: string;
    @Input() buttonText: string;
    @Input() buttonColor: string;
    @Input() buttonTextColor: string;
    
    constructor() {}

    ngOnInit() {}

}