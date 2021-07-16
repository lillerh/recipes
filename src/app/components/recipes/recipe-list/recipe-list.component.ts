import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('testRecipe', 'this is simply a test',
    'https://realfood.tesco.com/media/images/RFO-October2020-65809-Tesco-LetsCook-Oct20-65850-SpicedChickenGreenBeans1400x919-38f3e9b0-7241-49a3-83fe-fcc38d2c24be-0-1400x919.jpg'),
    new Recipe('testRecipe2', 'another test', 'https://images-na.ssl-images-amazon.com/images/I/41VdfOdxF9L._SX258_BO1,204,203,200_.jpg'),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectingRecipe(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
