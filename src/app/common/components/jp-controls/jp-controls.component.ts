import {Component, Input} from '@angular/core';

@Component({
    selector: 'jp-controls',
    templateUrl: './jp-controls.component.html',
    styleUrls: ['./jp-controls.component.css']
})

export class JP_ControlsComponent {
    controlOneIcon: string = 'now-playing';
    controlOneButtonText: string = null;
    controlTwoIcon: string = 'settings';
    controltwoButtonText: string;
    @Input() routeView: string;

    constructor() {}


}