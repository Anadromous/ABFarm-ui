import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GlobalConfigModule {
    //public static appUrl: string = "http://farmecommerce-env.eba-9umtewgr.us-west-2.elasticbeanstalk.com";
    public static appUrl: string = "http://localhost:8080";
    public static appName: string = "Apple Blossom Farm";
    public static appLogo: string = "assets/images/logo.png";
    public static appEmail: string = "appleblossomfarmfg@gmail.com";
    public static isCollapsed = false;
}
