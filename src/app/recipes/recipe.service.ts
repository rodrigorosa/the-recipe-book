import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A recipe',
              'Just a test',
              'http://maxpixel.freegreatpicture.com/static/photo/1x/Struffoli-Meal-Food-Sweet-Typical-Sweet-Recipe-647314.jpg',
              [
                new Ingredient('meat', 1),
                new Ingredient('bread', 1)
              ]),
    new Recipe('Another recipe',
               'Just another test',
               'http://maxpixel.freegreatpicture.com/static/photo/1x/Struffoli-Meal-Food-Sweet-Typical-Sweet-Recipe-647314.jpg',
                [
                  new Ingredient('sugar', 1),
                  new Ingredient('milk', 2)
                ]),
    new Recipe('Another one',
               'And one more',
               'http://maxpixel.freegreatpicture.com/static/photo/1x/Struffoli-Meal-Food-Sweet-Typical-Sweet-Recipe-647314.jpg',
                [
                  new Ingredient('pepper', 2)
                ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
