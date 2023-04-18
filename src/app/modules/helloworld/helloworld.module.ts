import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloworldRoutingModule } from './helloworld-routing.module';
import { PagesComponent } from './pages/pages.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [PagesComponent, DetailsComponent],
  imports: [CommonModule, HelloworldRoutingModule],
})
export class HelloworldModule {}
