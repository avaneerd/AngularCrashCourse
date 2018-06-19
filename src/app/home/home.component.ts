import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { BeerInfoComponent } from '../beer-info/beer-info.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  beers: Observable<any[]>;
  filterForm: FormGroup;

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      foodPairing: [null]
    });

    this.filterForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => this.fetchBeers());

    this.fetchBeers();
  }

  constructor(private beerService: BeerService, private dialog: MatDialog,
    private formBuilder: FormBuilder) {}

  fetchBeers() {
    this.beers = this.beerService.getBeers(this.filterForm.get('foodPairing').value);
  }

  beerClicked(id: number) {
    this.dialog.open(BeerInfoComponent, {
      data: {
        id: id
      }
    });
  }
}
