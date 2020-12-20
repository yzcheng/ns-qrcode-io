import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BusinessService, MfOrder, OrderStatus} from '../../service/business.service';

export interface OrderViewDialogData {
  lastN: string;
  status: OrderStatus;
}

@Component({
  selector: 'order-view-dialog',
  templateUrl: './order-view-dialog.html',
})
export class OrderViewDialog {

  constructor(
    public dialogRef: MatDialogRef<OrderViewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: OrderViewDialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  receiveOrderSelected(order:MfOrder):void
  {
    this.dialogRef.close(order);
  }
}
