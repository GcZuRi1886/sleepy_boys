import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {

  selectedValue: 'about' | 'entdeckung' | 'G' | 'beispiel' | 'PdM';

  oldValue: any;

  constructor(public platform: Platform,) {
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
