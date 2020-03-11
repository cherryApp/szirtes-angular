import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { UserComponent } from './page/user/user.component';
import { BeerComponent } from './page/beer/beer.component';
import { EditorComponent } from './common/editor/editor.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'user/:id',
    component: EditorComponent,
  },
  {
    path: 'beer',
    component: BeerComponent,
  },
  {
    path: 'beer/:id',
    component: EditorComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
