import { Injectable } from '@angular/core';
import * as Studentsdata from "../../assets/data.json";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nums = [1,2,3,4,5];
  // n1 = data;

  constructor() {}

  getdata() {
    console.log("getdata = ", Studentsdata);
    return Studentsdata;
  }
}
