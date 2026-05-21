import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qrreader.component.html',
  styleUrls: ['./qrreader.component.scss']
})
export class QrReaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  handleQrCode(event: any){
    alert(`${event}`)
  }
}
