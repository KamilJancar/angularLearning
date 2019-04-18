import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Palacinky', 'Toto je navod na palacinky', 'http://amuseinmykitchen.com/wp-content/uploads/2012/05/blintzesforweb-595x595.jpg'),
    new Recipe('Leco', 'Toto je navod na leco', 'http://amuseinmykitchen.com/wp-content/uploads/2012/05/blintzesforweb-595x595.jpg'),
  ]
  constructor() { }

  ngOnInit() {
  }

}
