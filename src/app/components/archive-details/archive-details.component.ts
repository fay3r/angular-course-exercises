import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-archive-details',
  templateUrl: './archive-details.component.html',
  styleUrls: ['./archive-details.component.css']
})
export class ArchiveDetailsComponent implements OnInit {
  year:any;
  month: any;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.year = params.get('year');
      this.month = params.get('month');
    });
  };

  back(){
    this.router.navigate(['/archive']);
  }

}
