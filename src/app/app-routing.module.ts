import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResumeComponent} from "./views/resume/resume.component";
import {ProjectsComponent} from "./views/projects/projects.component";
import {ContactComponent} from "./views/contact/contact.component";
import {MainComponent} from "./views/main/main.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
