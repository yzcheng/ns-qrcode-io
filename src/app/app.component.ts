import { Component, OnInit } from '@angular/core';
import {BusinessService} from './service/business.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ns-qrcode-io';

  userName:string;
  userPic:string = "./assets/man-300x300.png"

  constructor(private service:BusinessService){}

  ngOnInit(): void {
    this.service.getUserProfile().subscribe( v => {
      this.userName = v.lineName;
      this.userPic = v.linePicUrl;
    }, error => {
      this.userName = "Guest";
    });
  }
}
