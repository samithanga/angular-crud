import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { UserComponent }  from './user/user.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CrudComponent } from './crud/crud.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path : 'user',component: UserComponent},
  {path : 'reactive-form', component: ReactiveFormComponent},
  {path : 'crud', component: CrudComponent},
  {path : 'update-user/:id', component: UpdateUserComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent , UserComponent, ReactiveFormComponent, CrudComponent, UpdateUserComponent]


