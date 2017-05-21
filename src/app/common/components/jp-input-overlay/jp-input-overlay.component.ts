import {Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'jp-input-overlay',
    styleUrls: ['/jp-input-overlay.component.css'],
    templateUrl: './jp-input-overlay.component.html'
})

export class JP_InputOverlayComponent implements OnInit, OnChanges {
    @Input() inputLabel: string = '';
    @Output() closeinputoverlay = new EventEmitter<any>();
    term: string = '';
    buttonIcon: any = 'arrow';
    hasError: boolean = false;

    closeInputOverlay(event) {
        this.closeinputoverlay.emit(event);
        this.term = '';
    }

    ngOnChanges(changes: SimpleChanges) {
        document.getElementById('overlayInput').focus();
    }

    ngOnInit() {
        console.log('Im alive');
    }

}