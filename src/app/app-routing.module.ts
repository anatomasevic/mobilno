import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'pocetna',
    loadChildren: ()=> import('./pocetna/pocetna.module').then(m=>m.PocetnaPageModule)

  },
  
  {
    path: '',
    redirectTo: 'pocetna',
    pathMatch: 'full'
  },
  {
    path: 'pacijent',
    loadChildren: () => import('./pacijent/pacijent.module').then( m => m.PacijentPageModule)
  },
  {
    path: 'druga',
    loadChildren: () => import('./druga/druga.module').then( m => m.DrugaPageModule)
  },
  {
    path: 'treca',
    loadChildren: () => import('./treca/treca.module').then( m => m.TrecaPageModule)
  },
  {
    path: 'cetvrta',
    loadChildren: () => import('./cetvrta/cetvrta.module').then( m => m.CetvrtaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
