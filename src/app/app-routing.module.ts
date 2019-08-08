import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mapspace',
    pathMatch: 'full'
  },
  {
    path: 'mapspace',
    loadChildren: () => import('./mapspace/mapspace.module').then(mod => mod.MapspaceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
