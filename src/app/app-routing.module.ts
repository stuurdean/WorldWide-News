import { BusinessNewsComponent } from './pages/business-news/business-news.component';
import { SportsNewsComponent } from './pages/sports-news/sports-news.component';
import { GeneralNewsComponent } from './pages/general-news/general-news.component';
import { DetailSearchComponent } from './pages/detail-search/detail-search.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'search/:ref', component:SearchComponent},
{path:'details/:ref',component:DetailsComponent},
{path:'searches/:ref', component:DetailSearchComponent},
{path:'General', component:GeneralNewsComponent},
{path:'Sports', component:SportsNewsComponent},
{path:'Business', component:BusinessNewsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
