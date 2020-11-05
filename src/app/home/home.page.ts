import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  cardAction(value:string) : void {
    let attributeName: string = document.getElementById(value).getAttribute('name');
    if(attributeName==='chevron-down') {
      <HTMLIonIconElement> <unknown> document.getElementById(value).setAttribute('name', 'chevron-up');
    }else{
      <HTMLIonIconElement> <unknown> document.getElementById(value).setAttribute('name', 'chevron-down');
    }
  }

  checkIfOpen(value:string): boolean{
    return document.getElementById(value).getAttribute('name')==='chevron-up';
  }

}
