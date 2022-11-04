import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is just a test recipe', 'https://img.krishijagran.com/media/72224/pancakes.jpg', [ 
          new Ingredient('Flour', 2),
          new Ingredient('Eggs', 1),
          new Ingredient('Syrup', 5)
        ]),
        new Recipe('Another Test Recipe', 'This is another test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNI-POvzPjJU21VybdvCpDy3hlGiYDX9CGnQ&usqp=CAU', [
          new Ingredient('Chicken', 3),
          new Ingredient('Tomatoes', 12),
          new Ingredient('Cream', 2)
        ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}