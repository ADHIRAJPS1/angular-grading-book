import { Component, OnInit } from '@angular/core';
import { DataService } from '../SERVICE/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title = "Grading Book"
  date = new Date();
  professor = "Mr Mir Junaid";
  sdata:any;
  onview:boolean = false;
  showdata:Boolean = false;

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.sdata = this.data.getdata();
    console.log("sdata = ",this.sdata );
    console.log("length = ", length);
    // how to find length of a json variable ?
  }

  filterbyStatus(status: string){
    // for(let i=0;i < sdata.length();i++){}
  }

  displaydata() {
    if(this.showdata == true){
      this.showdata = false;
    }else{
      this.showdata = true;
    }
  }

  analytics(){
    if(this.onview == true){
      this.onview = false;
    }else{
      this.onview = true;
    }
  }

}
