import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerService } from '../beer.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-beer-info',
  templateUrl: './beer-info.component.html',
  styleUrls: ['./beer-info.component.css']
})
export class BeerInfoComponent implements OnInit {

  beerInfo: Observable<any>;

  constructor(private beerService: BeerService, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.beerInfo = this.beerService.getBeer(this.data.id);
  }

}
