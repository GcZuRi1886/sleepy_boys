import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {

  selectedValue: 'einleitung' | 'geschichte' | 'beispiel';

  oldValue: any;

  constructor() {
    this.selectedValue = null;
  }

  ngOnInit() {
  }

  changeSelectedValue(value: any){
    if(this.oldValue!==value){
      this.selectedValue = value;
      this.oldValue = value;
    }else{
      this.selectedValue = null;
      this.oldValue = null;
    }
  }
}
