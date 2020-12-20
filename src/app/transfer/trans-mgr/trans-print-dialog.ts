import {Component, Inject, AfterViewInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {QrCodeService} from '../../service/qr-code.service';

export interface TransPrintDialogData {
  qrCodeUrl:string
}

@Component({
  selector: 'trans-print-dialog',
  templateUrl: './trans-print-dialog.html',
})
export class TransPrintDialog implements AfterViewInit {

  constructor(public dialogRef: MatDialogRef<TransPrintDialog>,
    @Inject(MAT_DIALOG_DATA) public data: TransPrintDialogData, private qrCode:QrCodeService) {

  }

  ngAfterViewInit() {
    this.qrCode.generateToDom("#result", this.data.qrCodeUrl, 260, 260);

    // this.qrCode.decodeOnceFromVideoDevice('video', (v) => {
    //     if(v != null)
    //     {
    //       console.log(v.getText());
    //       this.qrCode.reset();
    //     }
    // });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
