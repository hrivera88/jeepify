import {Component} from '@angular/core';
import {JP_SafePipe} from '../common/pipes/jp-safe.pipe';
import {DomSanitizer} from '@angular/platform-browser';
import {JP_SearchService} from '../search-results/jp-search.service';
import {Router} from '@angular/router';

@Component({
    selector: 'jp-explore',
    templateUrl: './jp-explore.component.html',
    styleUrls: ['./jp-explore.component.css']
})

export class JP_ExploreComponent {
    backgroundImage: any;
    title: string = 'WHM';
    searchTerm: string = '';

    constructor(private sanitizer: DomSanitizer, private search: JP_SearchService, private router: Router) {
        this.backgroundImage = sanitizer.bypassSecurityTrustStyle("url(./assets/playlist-photo.jpeg)");
    }
    
    hello(key) {
        if(key == 'Enter') {
            this.search.setTerm(this.searchTerm);
            this.router.navigate(['/search-results']);
        }
    }

}