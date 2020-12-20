import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MfTrans, BusinessService } from '../../service/business.service';

@Component({
  selector: 'app-trans-view',
  templateUrl: './trans-view.component.html',
  styleUrls: ['./trans-view.component.scss']
})
export class TransViewComponent implements OnInit {

    orderIdFCtrl:FormControl;

    translist:MfTrans[] = [];
    displayedColumns: string[] = ['transId', 'orderId', 'createDt', 'createUser'];

    _ctrlPanelVisible:boolean = true;
    @Input()
    set ctrlPanelVisible(visible:boolean)
    {
      this._ctrlPanelVisible = visible;
    }

    @Output()
    orderSelected:EventEmitter<MfTrans> = new EventEmitter<MfTrans>();

    constructor(private service:BusinessService) { }

    ngOnInit(): void {
      this.orderIdFCtrl = new FormControl();
    }

    onClickQuery():void
    {
      this.service.findTransferByOrderId(this.orderIdFCtrl.value).subscribe( (list) =>  {
        this.translist = list;
      });
    }

    /**When user click a row*/
    onClickRow(v:MfTrans):void
    {
      this.orderSelected.emit(v)
    }

}
