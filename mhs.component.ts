import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mhs',
  templateUrl: './mhs.component.html',
  styleUrls: ['./mhs.component.css']
})
export class MhsComponent implements OnInit {

  constructor() { 
    this.nama = ['Mika', 'Rafa', 'Yosh', 'Gaby']
  }
  <ul>
  <li *ngFor="let n of nama">Hello {{n}}</li>
  </ul>

  ngOnInit(): void {
  }

}
