import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any = [
    {'image': "//placehold.it/180", title: "hello", desc: "lorem sajhjka sdjfhkjdsf sdkjfbksdjfh skjdfbkdsjfh"},
  ]
  favorites = [];
  constructor(public api: ApiService) { }

  addToFavorites(id){
    console.log("hhhh"+id)
    this.favorites.push(id);
    localStorage.clear();
    localStorage.setItem("favorites", JSON.stringify(this.favorites)
  }

  ngOnInit() {
    this.favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    this.api.getRandomBeers(null)
      .subscribe(e => {
        console.log(e);
        
      this.products = e;
    })
  }

}