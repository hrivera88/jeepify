import {Component, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {JP_SearchService} from './jp-search.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'jp-search-results',
    styleUrls: ['/jp-search-results.component.css'],
    templateUrl: './jp-search-results.component.html'
})

export class JP_SearchResultsComponent implements OnInit {
    title: string;
    route: any;
    currentView: number;
    artistName: string;
    songName: string;
    albumName: string;
    playlistName: string;
    filterButtonText: string;
    hasResults: any;

    constructor(route: ActivatedRoute,private location: Location,private search: JP_SearchService, private router: Router) {
        this.title = 'RAWR';
        this.route = route;
        this.artistName = 'Saves The Day';
        this.songName = 'Snakedog';
        this.albumName = 'Eat Or Get Ate';
        this.playlistName = 'Corridos Perrones';
    }

    clearFilter() {
        this.router.navigate(['/search-results'])
    }

    getResults(view) {

        //Run something to call Spotify
        //if no results return -1
        return -1
        
        //If we get results return 0
        //return 0
        
    }

    ngOnInit(): void {
        this.route.params
            .subscribe(params => {
                switch(params.category) {
                    case 'artists':
                        this.filterButtonText = 'Artists';
                        this.currentView = 1;
                        break;
                    case 'songs':
                        this.filterButtonText = 'Songs';
                        this.currentView = 2;
                        break;
                    case 'albums':
                        this.filterButtonText = 'Albums';
                        this.currentView = 3;
                        break;
                    case 'playlists':
                        this.filterButtonText = 'Playlists';
                        this.currentView = 4;
                        break;
                    default:
                        this.hasResults = this.getResults(null);
                        if(this.hasResults == -1) {
                            this.currentView = -1;
                        } else {
                            this.currentView = 0;
                        }
                }
            })
    }

}