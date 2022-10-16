import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
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

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}