import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export class MfOrder {
  orderId : string;
  prodId : string;
  prodSpec : string;
  custCode : string;
  amount : number;
  shipDate : Date;
  status? : string;
  createDt? : Date;
  createUser? : string;
  updateDt? : Date;
  updateUser? : string;
}

export class LineEmpMap
{
  lineUid : string;
  lineName : string;
  linePicUrl : string;
  empId : string;
  role : string;
  status : string;
  createDt : Date;
  lastLoginDt : Date;
}

export enum OrderStatus {
  Available = "A",
  Complete = "C",
  Frozen = "F",
  Delete = "D"
}

export class MfTrans {
  transId : string;
  orderId? : string;
  packId? : string;
  mfAmount? : number;
  mfMaterial? : string;
  mfDate? : Date;
  status? : string;
  createDt? : Date;
  createUser? : string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const httpOptions_text = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  responseType : 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http:HttpClient) { }
  //------------------------------//
  //---------  ORDER HERE --------//
  //------------------------------//
  insertOrderUrl = environment.apiUrl + '/service/insertOrder';
  insertOrder(order:MfOrder):Observable<MfOrder> {
    return this.http.post<MfOrder>(this.insertOrderUrl, order, httpOptions).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  deleteOrderUrl = environment.apiUrl + '/service/deleteOrder';
  deleteOrder(order:MfOrder):Observable<MfOrder> {
    return this.http.post<MfOrder>(this.deleteOrderUrl, order, httpOptions).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  _findOrdersBylastN = environment.apiUrl + '/service/findOrdersBylastN';
  findOrdersBylastN(n:number, status:OrderStatus):Observable<MfOrder[]> {
    return this.http.get<MfOrder[]>(this._findOrdersBylastN, {
        params : new HttpParams().set('lastN', n.toFixed(0)).set('status', status)
      }).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.userProfileErrorHandler)
    );
  }

  //---------------------------------//
  //---------  MF_TRANS HERE --------//
  //---------------------------------//
  createTransferForm(orderId:string):Observable<string> {
    return this.http.post<string>(environment.apiUrl + '/service/createTransferForm', orderId, httpOptions_text).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  findTransferInfo(transId:string):Observable<MfTrans> {
    return this.http.post<MfTrans>(environment.apiUrl + '/service/findTransInfo', transId, httpOptions).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  findTransferByOrderId(orderId:string):Observable<MfTrans[]> {
    return this.http.post<MfTrans[]>(environment.apiUrl + '/service/findTransByOrderId', orderId, httpOptions).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  //-------------------------------------//
  //---------  USER PROFILE HERE --------//
  //-------------------------------------//
  getUserProfileUrl = environment.apiUrl + '/api/getUserProfile';
  getUserProfile():Observable<LineEmpMap> {
    return this.http.get<LineEmpMap>(this.getUserProfileUrl).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.userProfileErrorHandler)
    );
  }

  //-------------------------------------//
  //---------  QR CODE HERE -------------//
  //-------------------------------------//
  createBotEntryUrlUrl = environment.apiUrl + '/service/createBotEntryUrl';
  createBotEntryUrl(formType:string, transId:string, procIds:string[]):Observable<string> {
    return this.http.post<string>(this.createBotEntryUrlUrl, {
      fromType : formType,
      id : transId,
      subIds : procIds
      }).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.userProfileErrorHandler)
    );
  }

  private userProfileErrorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      (error.error as ErrorEvent).message
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
