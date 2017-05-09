import { Component } from '@angular/core';
import { headerComponent } from 'header/app.headerComponent';
import { listComponent } from 'list/app.listComponent';
import { contentComponent } from 'content/app.contentComponent';
import { missionService } from './services/mission.service';


@Component({
  selector: 'my-app',
  templateUrl: './main.html',
  providers:[missionService]
})
export class AppComponent {

    sharedData: sharedData;

    constructor(private service: missionService) {
        this.sharedData = {
            activeIndex: 0,
            missions: service.getMissions(),
            addData: false,
            editData: false
        };
    }
}

interface sharedData {
    activeIndex: number;
    missions: Missions[];
    addData: boolean;
    editData: boolean;
}