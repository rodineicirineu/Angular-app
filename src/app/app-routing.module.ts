import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientDeleteComponent } from './components/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';

const routes: Routes = [
  {path: 'app', component: AppComponent},
  {path: 'components/client-delete/:id', component: ClientDeleteComponent},
  {path: 'components/client-update/:id', component: ClientUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
