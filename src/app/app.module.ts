import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { ViewComponent } from './view/view.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
