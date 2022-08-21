import { Component, OnInit } from '@angular/core';
import { GlobalConfigModule } from 'src/app/global-config/global-config.module';

//C:\chapman\dev\ABFarm\ABFarm-ui\src\app\global-config
//src\app\global-config

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //isCollapsed = false;
  isCollapsed = GlobalConfigModule.isCollapsed;
  constructor() { 
  }

  ngOnInit(): void {
  }
}
