import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//路由组件
import {BasicFormComponent} from "./pages/basic-form/basic-form.component";
import {BasicTableComponent} from "./pages/basic-table/basic-table.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
  {path: 'basic-form', component: BasicFormComponent},
  {path: 'basic-table', component: BasicTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
