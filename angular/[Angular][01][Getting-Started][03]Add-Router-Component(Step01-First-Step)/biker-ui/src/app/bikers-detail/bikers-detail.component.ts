import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@Angular/router';

@Component({
  selector: 'app-bikers-detail',
  templateUrl: './bikers-detail.component.html',
})
export class BikersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
      this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
