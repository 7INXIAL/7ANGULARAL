import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'helloworld',
    loadChildren: () =>
      import('./modules/helloworld/helloworld.module').then(
        (m) => m.HelloworldModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./community/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'lost',
    loadComponent: () =>
      import('./community/lost/lost.component').then((c) => c.LostComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
