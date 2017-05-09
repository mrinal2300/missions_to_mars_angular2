import { Component } from '@angular/core';

@Component({
  selector: 'listArea',
  templateUrl: './list.html',
  inputs:["sharedData"]
})
export class listComponent {

	/**
  	* @desc Dispaly selected mission on content component
  	* @param int index - index of selected mission
	*/
    showMission(index) {
        this.sharedData.activeIndex = index;
    }

    // @desc dispaly form to add new mission
    addNew() {
        if (this.sharedData.addData) {
            this.sharedData.addData = false;
        } else {
            this.sharedData.addData = true;
        }
    }
}