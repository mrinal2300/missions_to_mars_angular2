import { Component } from '@angular/core';

@Component({
  selector: 'contentArea',
  templateUrl: './content.html',
  inputs:["sharedData"]
})
export class contentComponent {

  	// @desc delete a selected mission
    deleteData() {
        this.sharedData.missions.splice(this.sharedData.activeIndex, 1);
        this.sharedData.activeIndex = 0;
    }

  	// @desc load edit form of selected mission
    loadEditForm() {
        if (this.sharedData.editData) {
            this.sharedData.editData = false;
        } else {
            this.sharedData.editData = true;
        }
    }

    /**
  	* @desc update the data of selected mission
  	* @param object value - values fron the form feilds
	  */
    edit_Data(value: any) {
        this.sharedData.missions[this.sharedData.activeIndex] = value;
        this.sharedData.editData = false;
    }

    /**
  	* @desc create new mission
  	* @param object value - values fron the form feilds
	  */
    addNewEntry(value: any) {
        this.sharedData.missions.push(value);
        this.sharedData.addData = false;
    }

    // @desc hide forms
    cancelFrom() {
        this.sharedData.addData = false;
        this.sharedData.editData = false;
    }
}