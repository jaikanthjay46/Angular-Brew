import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HomeComponent  } from "../home/home.component"
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent  {

  static products:any = []

  get productsstatic() {
    return FavoritesComponent.products;
  }
  constructor(private api: ApiService) { }


}
