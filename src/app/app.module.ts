import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { GlobalComponent } from './community/global/global.component';

@NgModule({
  declarations: [
    GlobalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [GlobalComponent]
})
export class AppModule { }
