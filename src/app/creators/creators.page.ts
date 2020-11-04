import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.page.html',
  styleUrls: ['./creators.page.scss'],
})
export class CreatorsPage implements OnInit {

  selectedValue: 'einleitung' | 'geschichte';

  constructor() {
    this.selectedValue = null;
  }

  ngOnInit() {
  }

  changeSelectedValue(value: any){
      this.selectedValue = value;
  }

}
