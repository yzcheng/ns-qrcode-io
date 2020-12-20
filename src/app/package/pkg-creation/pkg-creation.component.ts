import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {QrCodeService} from '../../service/qr-code.service';
import {MfTrans} from '../../service/business.service';
import {TransViewComponent} from '../../transfer/trans-view/trans-view.component';


@Component({
  selector: 'app-pkg-creation',
  templateUrl: './pkg-creation.component.html',
  styleUrls: ['./pkg-creation.component.scss']
})
export class PkgCreationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  @ViewChild(TransViewComponent)
  tView:TransViewComponent;

  constructor(private _formBuilder: FormBuilder, private qrCode:QrCodeService) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    console.log(this.firstFormGroup.value);
    this.startScan();
  }

  ngOnDestroy():void
  {
    this.stopScan();
  }

  startScan():void {
    this.qrCode.decodeOnceFromVideoDevice('video', (v) => {
        if(v != null)
        {
          this.firstFormGroup.addControl(v.getText(), new FormControl(v.getText(), Validators.required));
          const newAry:MfTrans[] = [];
          console.log(Object.keys(this.firstFormGroup.controls).forEach(
            key => {
              let trans:MfTrans = {transId : key};
              trans.orderId = "XXXXX";
              trans.createDt = new Date();
              trans.createUser = "YZCHENG";
              newAry.push(trans);
            }
          ));
          this.tView.translist = newAry;
        }
    });
  }

  stopScan():void {
    this.qrCode.reset();
  }
}
