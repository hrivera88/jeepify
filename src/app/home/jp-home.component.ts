import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'jp-home',
  styleUrls: ['./jp-home.component.css'],
  templateUrl: './jp-home.component.html'
})
export class JP_HomeComponent implements OnInit {
  icon: string;
  title: string;

  dashItems = [
    {
      "icon": "home-sign-in",
      "title": "Sign In"
    },
    {
      "icon": "explore",
      "title": "Explore"
    },
    {
      "icon": "artists",
      "title": "Artists"
    },
    {
      "icon": "songs",
      "title": "Songs"
    },
    {
      "icon": "playlists",
      "title": "Playlists"
    }
  ];

  constructor() {}


  ngOnInit() {}

}
