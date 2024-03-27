import { Component, OnInit } from '@angular/core';
import { filter, from, reduce } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  message: number = 0
  ngOnInit() {
    const myObservable = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    myObservable.pipe(
      filter((number) => number % 2 === 0),
      reduce((key, value) => key + value, 0)
    ).subscribe((res) => {
      this.message = res;
      console.log("RES : ", this.message)
    })
  }
}
