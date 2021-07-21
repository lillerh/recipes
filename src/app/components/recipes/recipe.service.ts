import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from 'src/app/components/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('testRecipe', 'this is simply a test',
    'https://realfood.tesco.com/media/images/RFO-October2020-65809-Tesco-LetsCook-Oct20-65850-SpicedChickenGreenBeans1400x919-38f3e9b0-7241-49a3-83fe-fcc38d2c24be-0-1400x919.jpg',
    [
      new Ingredient('chicken breast', 2),
      new Ingredient('sparagus',10),
      new Ingredient('almond',1)
    ]),
    new Recipe('testRecipe2', 'another test',
    'https://images-na.ssl-images-amazon.com/images/I/41VdfOdxF9L._SX258_BO1,204,203,200_.jpg',
     [
      new Ingredient('fish', 1),
      new Ingredient('chicken',2),
      new Ingredient('cheese',1)
    ]),
    new Recipe('testRecipe3', 'lets see',
    'https://static.guiainfantil.com/media/9611/c/como-decorar-la-comida-de-los-ninos-md.jpg',
     [
      new Ingredient('meat', 2),
      new Ingredient('spaguetti',2),
      new Ingredient('lettuce',1),
    ]),
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  constructor(private sLService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice(); //to only get a copy of the array of recipes
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.sLService.addIngredients(ingredients);
  }
}
