import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/components/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe:Recipe;


  constructor(private sLService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onSelectToShoppingList(ingredients: Ingredient[]){
    this.sLService.addIngredients(ingredients);
  }
}
