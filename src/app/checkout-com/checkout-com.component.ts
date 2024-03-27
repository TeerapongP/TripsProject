import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of, delay, filter, map } from 'rxjs';
import { DataServiceService } from './data-service.service';
@Component({
  selector: 'app-checkout-com',
  templateUrl: './checkout-com.component.html',
  styleUrls: ['./checkout-com.component.css']
})
export class CheckoutComComponent implements OnInit {
  checkoutId!: string;
  data: any[] = [];
  errorMessage: string = "";
  constructor(private dataService: DataServiceService) { }

  data$: Observable<any> = new Observable<any>;

  ngOnInit() {
    const source$ = of(1, 2, 3, 4, 5);

    this.data$ = source$.pipe(
      filter(num => num % 2 === 0), // กรองเฉพาะตัวเลขที่เป็นเลขคู่
      map(num => num * 10) // แปลงตัวเลขให้คูณด้วย 10
    );
  }

}
