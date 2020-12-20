import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  curViewName:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public navToBack():void
  {
    this.router.navigate(['/mainMenu']);
  }
}
