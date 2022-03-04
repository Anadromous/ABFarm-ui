import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './components/animals/animals.component';
import { GlampingComponent } from './components/glamping/glamping.component';
import { LambPageComponent } from './components/lamb-page/lamb-page.component';
import { MainComponent } from './components/main/main.component';
import { OurFarmPageComponent } from './components/our-farm-page/our-farm-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';

const routes: Routes = [
  {path: 'app-main', component: MainComponent},
  {path: 'our-farm', component: OurFarmPageComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'order-lamb', component: LambPageComponent},
  {path: 'glamping', component: GlampingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  MainComponent,
  OurFarmPageComponent,
  AnimalsComponent,
  ProjectsPageComponent,
  LambPageComponent,
  GlampingComponent
]
