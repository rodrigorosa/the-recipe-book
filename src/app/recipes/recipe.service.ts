import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A recipe',
              'Just a test',
              'http://maxpixel.freegreatpicture.com/static/photo/1x/Struffoli-Meal-Food-Sweet-Typical-Sweet-Recipe-647314.jpg'),
    new Recipe('Another recipe',
               'Just another test',
               'http://maxpixel.freegreatpicture.com/static/photo/1x/Struffoli-Meal-Food-Sweet-Typical-Sweet-Recipe-647314.jpg'),
    new Recipe('Another one',
               'And one more',
               'http://maxpixel.freegreatpicture.com/static/photo/1x/Struffoli-Meal-Food-Sweet-Typical-Sweet-Recipe-647314.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
