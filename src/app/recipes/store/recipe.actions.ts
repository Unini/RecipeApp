import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPES = 'SET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const STORE_RECIPES = 'STORE_RECIPES';
export const FETCH_RECIPES = 'FETCH_RECIPES';


export class SetRecipes implements Action {
  public readonly type = SET_RECIPES;

  constructor(public payload: Recipe[]) {}
}

export class AddRecipe implements Action {
  public readonly type = ADD_RECIPE;

  constructor(public payload: Recipe) {}
}

export class UpdateRecipe implements Action {
  public readonly type = UPDATE_RECIPE;

  constructor(public payload: {index: number, updatedRecipe: Recipe}) {}
}

export class DeleteRecipe implements Action {
  public readonly type = DELETE_RECIPE;

  constructor(public payload: number) {}
}

export class StoreRecipes implements Action {
  public readonly type = STORE_RECIPES;
}

export class FetchRecipes implements Action {
  public readonly type = FETCH_RECIPES;
}

export type RecipeActions = SetRecipes | AddRecipe | UpdateRecipe | DeleteRecipe | StoreRecipes | FetchRecipes;
