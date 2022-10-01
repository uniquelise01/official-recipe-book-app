import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is just a test recipe', 'https://img.krishijagran.com/media/72224/pancakes.jpg'),
    new Recipe('Another Test Recipe', 'This is another test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNI-POvzPjJU21VybdvCpDy3hlGiYDX9CGnQ&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
