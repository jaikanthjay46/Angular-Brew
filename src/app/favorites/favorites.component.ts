import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HomeComponent  } from "../home/home.component"
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  static products:any = [
    {'image': "//placehold.it/180", title: "hello", desc: "lorem sajhjka sdjfhkjdsf sdkjfbksdjfh skjdfbkdsjfh"},
  ]

  get productsstatic() {
    return FavoritesComponent.products;
  }
  constructor(private api: ApiService) { }


}
