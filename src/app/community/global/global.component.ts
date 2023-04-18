import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalComponent {
  single = false;
}
