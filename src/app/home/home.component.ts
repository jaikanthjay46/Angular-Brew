import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FavoritesComponent } from "../favorites/favorites.component"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any = []
  favorites = [];
  constructor(public api: ApiService) { }

  addToFavorites(id){
    console.log("hhhh"+id)
    this.favorites.push(id);
    localStorage.clear();
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
    this.api.getRandomBeers(this.favorites)
      .subscribe(e => {
        console.log(e);        
      FavoritesComponent.products = e;
    })
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
