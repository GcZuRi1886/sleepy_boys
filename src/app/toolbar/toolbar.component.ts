import { Component, OnInit } from '@angular/core';
import {MenuElement} from '../objects/menu-element';
import {MenuElements} from '../objects/menu-elements';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  menuElements: MenuElement[] = MenuElements;

  constructor(
      public router: Router,
      public platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar
  ) {
  }

  ngOnInit(){
  }
}

