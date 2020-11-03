import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'subjects',
    loadChildren: () => import('./subjects/subjects.module').then( m => m.SubjectsPageModule)
  },
  {
    path: 'creators',
    loadChildren: () => import('./creators/creators.module').then( m => m.CreatorsPageModule)
  },
  {
    path: 'links',
    loadChildren: () => import('./links/links.module').then( m => m.LinksPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
