import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MfOrder, OrderStatus, BusinessService } from '../../service/business.service';
import { OrderViewDialogData } from './order-view-dialog';
import {MatTableDataSource} from '@angular/material/table';

export class ImmediantQueryCommand{

}

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {

  orders:MfOrder[];
  displayedColumns: string[] = ['orderId', 'prodId', 'prodSpec', 'custCode', 'amount', 'shipDate', 'createDt', 'createUser'];

  //---- getting & setting
  _queryCond:OrderViewDialogData;
  get queryCond():OrderViewDialogData {
    return this._queryCond;
  }

  @Input()
  set queryCond(cond : OrderViewDialogData) {
    this._queryCond = cond;
    this.service.findOrdersBylastN( parseInt(cond.lastN), cond.status).subscribe( (orders) =>  {
      this.orders = orders;
    });
  }
  _ctrlPanelVisible:boolean = true;
  @Input()
  set ctrlPanelVisible(visible:boolean)
  {
    this._ctrlPanelVisible = visible;
  }

  @Output()
  orderSelected:EventEmitter<MfOrder> = new EventEmitter<MfOrder>();

  constructor(private service:BusinessService) { }

  ngOnInit(): void {
  }

  onClickQuery():void
  {
    this.service.findOrdersBylastN( 180, null).subscribe( (orders) =>  {
      this.orders = orders;
    });
  }

  /**When user click a row*/
  onClickRow(v:MfOrder):void
  {
    this.orderSelected.emit(v)
  }
}
