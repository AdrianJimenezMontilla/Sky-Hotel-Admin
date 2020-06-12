import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list',
    loadChildren: () => import('./pages/list/list.module')
                          .then( m => m.ListPageModule)},
                          
    
  { path: 'create-hotel', loadChildren: () => import('./pages/form/form.module') .then( m => m.FormPageModule)},
                          
  { path: 'edit-hotel/:id', loadChildren: () => import('./pages/form/form.module') .then( m => m.FormPageModule),
                          },
  {
    path: 'estadistica',
    loadChildren: () => import('./pages/estadistica/estadistica.module').then( m => m.EstadisticaPageModule)
  },





  


  
  

  ];
  

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
