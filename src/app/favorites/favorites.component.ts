import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites = [];
  products:any = [
    {'image': "//placehold.it/180", title: "hello", desc: "lorem sajhjka sdjfhkjdsf sdkjfbksdjfh skjdfbkdsjfh"},
  ]
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.favorites = JSON.parse(localStorage.getItem("favorites"));
    this.api.getRandomBeers(this.favorites)
      .subscribe(e => {
        console.log(e);
        
      this.products = e;
    })
  }

}
