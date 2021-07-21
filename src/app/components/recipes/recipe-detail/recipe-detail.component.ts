import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/components/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe:Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelectToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }
}
