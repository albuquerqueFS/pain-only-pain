import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // loadChildren: () =>
    //   import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    // loadChildren: () =>
    //   import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
