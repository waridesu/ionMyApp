import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private recipes: Recipe [] = [
        {
            id: 'r1',
            title: 'Schnitzel',
            imageUrl: 'https://picsum.photos/200/300',
            ingredients: ['French Fries', 'Pork Meat', 'Salad']
        },
        {
            id: 'r2',
            title: 'Don\'t know',
            imageUrl: 'https://picsum.photos/250/300',
            ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
        },
        {
            id: 'r3',
            title: 'Bagget Sandwich',
            imageUrl: 'https://picsum.photos/300/300',
            ingredients: ['Beget Sandwich', 'Pork Meat', 'Salad']
        },
    ];

    constructor() {
    }

    getAllRecipes() {
        return [...this.recipes];
    }

    getRecipe(recipeId: string) {
        return {
            ...this.recipes.find(recipe => {
                return recipe.id === recipeId;
            })
        };
    }
    deleteRecipe(recipeId: string){
        this.recipes = this.recipes.filter(recipe => {
            return recipe.id !== recipeId;
        });
    }
}
