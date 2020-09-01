import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(private _srv: AppService) { }
  years: any = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  selectedFilters: any = {
    year: null,
    isLaunch: null,
    isLanding: null
  }

  ngOnInit(): void {
  }

  onSubmitFilter(key, value) {
    this.selectedFilters[key] = value;
    this._srv.filterChanges.next(this.selectedFilters);
  }

}
