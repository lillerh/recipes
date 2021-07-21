import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  constructor(private sLService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const ingredient =new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.sLService.addIngredient(ingredient);
  }
}
