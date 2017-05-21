import {Component, OnInit, EventEmitter} from '@angular/core';
import {JP_ControlsComponent} from './common/components/jp-controls/jp-controls.component';
import {JP_TopBarComponent} from './common/components/top-bar.component/jp-top-bar.component';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routeLocation: any;
  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      this.routeLocation = location.path();
    })
  }
}

