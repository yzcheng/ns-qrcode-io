import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {BusinessService, MfOrder} from '../../service/business.service';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-mgr',
  templateUrl: './order-mgr.component.html',
  styleUrls: ['./order-mgr.component.scss']
})
export class OrderMgrComponent implements OnInit {

  curViewName:string = 'order-view';
  
  showView(viewName:string):void
  {
    this.curViewName = viewName;
  }

  // form control area
  orderIdFCtrl:FormControl = new FormControl();
  prodFCtrl:FormControl = new FormControl();
  prodSpecFCtrl:FormControl = new FormControl();
  custFCtrl:FormControl = new FormControl();
  amountFCtrl:FormControl = new FormControl();
  shipDateFCtrl:FormControl = new FormControl();

  constructor(private router:Router, private service:BusinessService, private _snackBar:MatSnackBar) { }
  minDate:Date = new Date();

  prodOptions: string[] = ['TR','R'];

  prodFilteredOptions: Observable<string[]>;

  prodSpecOptions: string[] = ['5x16', '16.3x8.15x17'];

  prodSpecFilteredOptions: Observable<string[]>;

  custOptions: string[] = ['C0C005016002', 'FUJA16C08AC0'];

  custFilteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.prodFilteredOptions = this.prodFCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => {
          return this.prodOptions.filter(option => option.toLowerCase().includes(value.toString().toLowerCase()));
        })
      );

    this.prodSpecFilteredOptions = this.prodSpecFCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => {
          return this.prodSpecOptions.filter(option => option.toLowerCase().includes(value.toString().toLowerCase()));
        })
      );

      this.custFilteredOptions = this.custFCtrl.valueChanges
        .pipe(
          startWith(''),
          map(value => {
            return this.custOptions.filter(option => option.toLowerCase().includes(value.toString().toLowerCase()));
          })
        );
  }

  /**
   * Navigate to main page
   */
  public navToBack():void
  {
    this.router.navigate(['/mainMenu']);
  }

  public doInsertOrder():void
  {
    let order:MfOrder = new MfOrder();
    order.orderId = this.orderIdFCtrl.value;
    order.prodId = this.prodFCtrl.value;
    order.prodSpec = this.prodSpecFCtrl.value;
    order.custCode = this.custFCtrl.value;
    order.amount = this.amountFCtrl.value;
    order.shipDate = this.shipDateFCtrl.value;
    order.createDt = new Date();

    this.service.insertOrder(order).subscribe(o => {
      let ref:MatSnackBarRef<SimpleSnackBar> = this._snackBar.open("工令"+o.orderId+"建立!", "取消建立", {
        duration: 6000
      });
      ref.onAction().subscribe( () => {
        this.service.deleteOrder(order).subscribe(delO => {
          this._snackBar.open("工令"+delO.orderId+"已取消","", {
            duration: 3000
          });
        });
      });
    });
  }
}
