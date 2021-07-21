import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('testRecipe', 'this is simply a test',
    'https://realfood.tesco.com/media/images/RFO-October2020-65809-Tesco-LetsCook-Oct20-65850-SpicedChickenGreenBeans1400x919-38f3e9b0-7241-49a3-83fe-fcc38d2c24be-0-1400x919.jpg'),
    new Recipe('testRecipe2', 'another test', 'https://images-na.ssl-images-amazon.com/images/I/41VdfOdxF9L._SX258_BO1,204,203,200_.jpg'),
    new Recipe('testRecipe3', 'lets see', 'https://static.guiainfantil.com/media/9611/c/como-decorar-la-comida-de-los-ninos-md.jpg'),
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(){
    return this.recipes.slice(); //to only get a copy of the array of recipes
  }
}
