import { Injectable } from '@angular/core';
import { BrowserQRCodeReader, BrowserQRCodeSvgWriter, DecoderResult, DecodeContinuouslyCallback} from '@zxing/library';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {
  codeWriter:BrowserQRCodeSvgWriter = new BrowserQRCodeSvgWriter();
  codeReader:BrowserQRCodeReader = new BrowserQRCodeReader();
  constructor() { }

  /**
   * @param content string for generate to QR code.
   * @param domId dom id for write QR code.
   *
   */
  public generateToDom(domId:string, content:string, weight:number, height:number):void
  {
    // or render it directly to DOM.
    this.codeWriter.writeToDom(domId, content, weight, height);
  }

  public decodeOnceFromVideoDevice(domId:string, callback:DecodeContinuouslyCallback):void
  {
    this.codeReader.listVideoInputDevices()
      .then(videoInputDevices => {
        let deviceId:string = videoInputDevices[0].deviceId;
        this.codeReader.decodeFromVideoDevice(deviceId,domId, callback)
        .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }

  public reset():void
  {
    this.codeReader.reset();
  }
}
