import { Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {BusinessService, MfOrder, OrderStatus} from '../../service/business.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {OrderViewDialog} from '../../order/order-view/order-view-dialog';
import {TransPrintDialog} from "./trans-print-dialog";

@Component({
  selector: 'app-trans-mgr',
  templateUrl: './trans-mgr.component.html',
  styleUrls: ['./trans-mgr.component.scss']
})
export class TransMgrComponent implements OnInit {
  curViewName:string = 'trans-view';

  selectedOrderId:string;
  // form control area
  orderIdFCtrl:FormControl = new FormControl();
  prodFCtrl:FormControl = new FormControl();
  prodSpecFCtrl:FormControl = new FormControl();
  custFCtrl:FormControl = new FormControl();
  amountFCtrl:FormControl = new FormControl();
  shipDateFCtrl:FormControl = new FormControl();

  constructor(private router:Router, private dialog: MatDialog, private service:BusinessService) { }

  ngOnInit(): void {
  }

  public navToBack():void {
    this.router.navigate(['/mainMenu']);
  }

  /**
   * 建立根據工令建立移轉單及子流程
   */
  public doCreateTransNo():void {
    //query uncomplete records form confirm
    let orderId:string = this.orderIdFCtrl.value;

    //insert to db & call QR code generate.
    this.service.createTransferForm(orderId).subscribe( (url) => {
      const dialogRef:MatDialogRef<TransPrintDialog, string> = this.dialog.open(TransPrintDialog, {
        width: '60%',
        data: { qrCodeUrl: url }
      });
    });
    //print

  }

  public fillinOrderData(order:MfOrder) {
    this.orderIdFCtrl.setValue(order.orderId);
    this.prodFCtrl.setValue(order.prodId);
    this.prodSpecFCtrl.setValue(order.prodSpec);
    this.custFCtrl.setValue(order.custCode);
    this.amountFCtrl.setValue(order.amount);
    this.shipDateFCtrl.setValue(order.shipDate);
  }

  public popupOrderView():void {
    const dialogRef:MatDialogRef<OrderViewDialog, MfOrder> = this.dialog.open(OrderViewDialog, {
      width: '80%',
      data: { lastN: '30', status: OrderStatus.Available}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.orderIdFCtrl.setValue(result.orderId);
      this.prodFCtrl.setValue(result.prodId);
      this.prodSpecFCtrl.setValue(result.prodSpec);
      this.custFCtrl.setValue(result.custCode);
      this.amountFCtrl.setValue(result.amount);
      this.shipDateFCtrl.setValue(result.shipDate);
    });
  }
}
