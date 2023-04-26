import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  date= new Date().getDate();
  month = new Date().getMonth() +1;
  year = new Date().getFullYear();

  fulldate = this.date + '/' + this.month + '/' + this.year;
  
  ngOnInit(): void {
  }

}
