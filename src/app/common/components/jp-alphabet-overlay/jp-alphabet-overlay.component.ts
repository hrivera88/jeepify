import {Component, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'jp-alphabet-overlay',
    templateUrl: './jp-alphabet-overlay.component.html',
    styleUrls: ['/jp-alphabet-overlay.component.css']
})

export class JP_AlphabetOverlayComponent {
    routeLocation: string;
    route: any;
    @Output() closeoverlay = new EventEmitter<any>();
    
    constructor(location: Location, router: Router, route: ActivatedRoute) {
        this.route = route;
        router.events.subscribe((val) => {
        this.routeLocation = location.path();
        })
    }

    scroll() {
        this.route.fragment.subscribe ( f => {
        const element = document.querySelector ( "#" + f )
        if ( element ) element.scrollIntoView ( element )
        });
    }

    closeOverlay() {
        this.closeoverlay.emit();
    }

}