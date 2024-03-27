import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceService } from './service/service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap, debounceTime, catchError, takeUntil } from 'rxjs/operators';
import { Subject, Subscription, of } from 'rxjs';


@Component({
  selector: 'travel-home',
  templateUrl: './travel-home.component.html',
  styleUrls: ['./travel-home.component.css']
})
export class TravelHomeComponent implements OnInit {

  searchForm!: FormGroup;
  searchResult: any[] = [];
  onSearchTrips = new Subject<string>();

  subscription?: Subscription;
  tripsData: any[] = [];
  showAlert = false;

  constructor(
    private tripsService: ServiceService,
    private fb: FormBuilder) {
    this.createForm();
    this.getTripsData();
    this.searchTripsDataRes();
  }
  ngOnInit() {

  }
  showFullDescription: boolean = false;
  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }


  createForm() {
    this.searchForm = this.fb.group({
      textSearch: ['']
    });
  }


  getTripsData() {
    this.tripsService.getTripsData().subscribe(res => {
      this.tripsData = res.trips;
    })
  }

  searchTripsDataRes() {
    this.onSearchTrips.pipe(
      debounceTime(400),
      switchMap((searchValue: string) => {
        return this.tripsService.SearchTripsData(searchValue).pipe(
          catchError(error => {
            console.error('Error occurred during search:', error);
            return [];
          })
        );
      })
    ).subscribe(
      (res) => {
        this.searchResult = res;
      }
    );
  }
  seachTripsData() {
    const searchValue = this.searchForm.get('textSearch')?.value;
    if (null != searchValue && "" !== searchValue) {
      this.onSearchTrips.next(searchValue);
    } else {
      this.getTripsData();
    }
  }
  postData() {
    const data = { key: 'value' };
    this.tripsService.postData(data).subscribe(response => {
      console.log(response);
    });
  }

}

