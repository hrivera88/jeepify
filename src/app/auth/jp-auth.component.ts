import {Component, OnInit} from '@angular/core';
import {AuthService} from '../common/services/auth.service';

@Component({
    selector: 'jp-auth',
    styleUrls: ['/jp-auth.component.css'],
    templateUrl: './jp-auth.component.html',
    providers: [AuthService]
})

export class JP_AuthComponent implements OnInit {
    showOverlay: boolean;
    inputLabel: string;
    id: string;

    constructor(private auth: AuthService) {}

    toggleInputOverlay(event) {
        if(event.srcElement.id == 'overlayInput') {
            return;
        } else {
            if(event.target.tagName == 'INPUT') {
                this.inputLabel = event.srcElement.placeholder;
            }
            this.showOverlay = !this.showOverlay;

            if(this.showOverlay === false) {
                this.inputLabel = '';
            }

        }
    }

    ngOnInit() {
        this.showOverlay = false;
        this.auth.spotifyLogin().subscribe((data) => {
            console.log(data);
        },
        (err) => {
            console.log(err);
        },
        () => {
            console.log('Completed');
        });

    }
    
}