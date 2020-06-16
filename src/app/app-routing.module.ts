import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasicFormComponent} from "./pages/basic-form/basic-form.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
  {path: 'basic-form', component: BasicFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
