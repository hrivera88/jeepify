import {Component} from '@angular/core';

@Component({
    selector: 'jp-now-playing',
    styleUrls: ['./jp-now-playing.component.css'],
    templateUrl: './jp-now-playing.component.html'
})

export class JP_NowPlayingComponent {
    playButtonIcon: string;
    stopButtonIcon: string;
    repeatButtonIcon: string;
    saveButtonIcon: string;
    saveButtonText: string;
    previousButtonIcon: string;
    nextButtonIcon: string;
    shuffleButtonIcon: string
    followButtonIcon: string;
    followButtonText: string;

    constructor() {
        this.playButtonIcon = 'green-play';
        this.stopButtonIcon = 'green-stop';
        this.repeatButtonIcon = 'green-repeat';
        this.saveButtonIcon = 'plus';
        this.saveButtonText = 'Save';
        this.previousButtonIcon = 'green-previous';
        this.nextButtonIcon = 'green-next';
        this.shuffleButtonIcon = 'green-shuffle';
        this.followButtonIcon = 'green-follow';
        this.followButtonText = 'Follow Artist';
    }

}