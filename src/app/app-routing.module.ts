import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'news-list',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule),
      },
      {
        path: ':recipeId',
        loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule)
      }
    ]
  },
  {
    path: 'news-list',
    children: [
      {
        path: '',
        loadChildren: () => import('./news-list/news-list.module').then(m => m.NewsListPageModule)
      },
      {
        path: ':articleUrl',
        loadChildren: () => import('./news-list/news-detail/news-detail.module').then(m => m.NewsDetailPageModule)
      }
    ]
  },
  {
    path: 'validation-form',
    loadChildren: () => import('./validation-form/validation-form.module').then( m => m.ValidationFormPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
