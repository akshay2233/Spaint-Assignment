import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {

  constructor(private _srv: AppService) { }
  isLoading: any = false;
  lstDetails: any = [];
  filterChanges: Subscription;
  searchText:any = null;
  ngOnInit(): void {
    this.isLoading = true;
    this.fnGetData();
    this.filterChanges = this._srv.filterChanges.subscribe((res) => {
      
      if (res) {
        this.fnGetData(res);
      }
    })
  
  }



  fnGetData(filters?) {
    this._srv.fnAddTask(filters).then((res: any) => {
      this.lstDetails = [...res]
      this.isLoading = false;
    })

  }
  ngOnDestroy() {
    if (this.filterChanges) {
      this.filterChanges.unsubscribe();
    }
  
  }

}
