import {Component, Input} from '@angular/core';

@Component({
    selector: 'jp-filter-box',
    templateUrl: './jp-filter-box.component.html',
    styleUrls: ['/jp-filter-box.component.css']
})

export class JP_FilterBoxComponent {
    @Input() buttonText: string;
}