import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceService } from './service/service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap, debounceTime, catchError, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'travel-home',
  templateUrl: './travel-home.component.html',
  styleUrls: ['./travel-home.component.css']
})
export class TravelHomeComponent implements OnInit {

  searchForm!: FormGroup;
  searchResult: any[] = [];
  tripsData: any[] = [];
  showAlert = false;
  onSeachTrips: Subject<any> = new Subject<any>();
  private destroy$ = new Subject<void>();
  errorMessage: string = "";
  // MessageAlert: string = 'ห้ามใส่อักษรพิเศษ เช่น !@#$%^*()_+[]{};:\\"\\|,.<>/?~';
  constructor(
    private tripsService: ServiceService,
    private fb: FormBuilder) {
    this.createForm();
    this.getTripsData();
    this.seachTripsData();
  }

  ngOnInit() {

  }
  showFullDescription: boolean = false;
  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }
  createForm() {
    this.searchForm = this.fb.group({
      textSearch: ['', { keyword: '' }]
    });
  }
  getTripsData() {
    this.tripsService.getTripsData().subscribe(res => {
      this.tripsData = res.trips;
    })
  }

  seachTripsData() {
    const searchValue = this.searchForm.get('textSearch')?.value;
    if (searchValue !== null && searchValue !== "") {
      this.onSeachTrips.next(searchValue);
      this.onSeachTrips.pipe(
        debounceTime(500),
        switchMap((searchValue) => {
          const json = { keyword: searchValue };
          // console.log("JSON : ", json)
          return this.tripsService.SearchTripsData(json);
        })
      ).subscribe(
        (res) => {
          this.searchResult = res;
        },
      );
    } else {
      this.getTripsData();
    }
  }

  ngOnDestroy() {
    // Unsubscribe from the observable to avoid memory leaks
    this.destroy$.next();
    this.destroy$.complete();
  }
}

