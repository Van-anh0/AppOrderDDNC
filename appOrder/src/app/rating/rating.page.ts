import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  placeholder="Đánh giá của bạn ..."

  constructor() { }

  ngOnInit() {
  }

  countStar(star) {
    this.selectedValue = star;
  }

  addClass(star) {
    let ab = "";
    for (let i = 0; i < star; i++) {
      ab = "starId" + i;
      document.getElementById(ab).classList.add("selected");
    }
 }
 removeClass(star) {
    let ab = "";
    for (let i = star-1; i >= this.selectedValue; i--) {
      ab = "starId" + i;
      document.getElementById(ab).classList.remove("selected");
    }
  }
  
}
