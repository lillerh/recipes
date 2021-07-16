
import { Component } from "@angular/core";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";

import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector:'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls:['./shopping-list.component.css']
})
export class ShoppingListComponent{
  ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Bread', 2),
  ];

  addNewIngredient(newIngredient:Ingredient){
    this.ingredients.push(newIngredient);
  }
}
