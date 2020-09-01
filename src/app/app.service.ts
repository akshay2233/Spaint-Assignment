import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  BASE_URL: any = 'https://api.spaceXdata.com/v3/launches?limit=100';
  filterChanges: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient,) { }

  fnAddTask(filters) {
    
    var url: any = this.BASE_URL;
    if (filters) {
      if (filters.isLaunch == false || filters.isLaunch == true) {
        url = url + '&launch_success=' + filters.isLaunch;
      }
      if (filters.isLanding == false || filters.isLanding == true) {
        url = url + '&land_success=' + filters.isLanding;
      }
      if (filters.year) {
        url = url + '&launch_year=' + filters.year;
      }
    }



    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe((response: any) => {
          resolve(response);
        }, err => {
          resolve(false);
          throw err;
        });
    });
  }



}
