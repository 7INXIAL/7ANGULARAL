import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    console.log(this.route.snapshot.paramMap.get("paramskey"));

    this.route.queryParamMap.subscribe(data => {
      console.log(data);
      
    })
  }
}
