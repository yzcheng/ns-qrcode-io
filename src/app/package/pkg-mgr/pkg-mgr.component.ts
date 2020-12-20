import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pkg-mgr',
  templateUrl: './pkg-mgr.component.html',
  styleUrls: ['./pkg-mgr.component.scss']
})
export class PkgMgrComponent implements OnInit {

  curViewName:string = 'pkg-view';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public navToBack():void
  {
    this.router.navigate(['/mainMenu']);
  }
}
