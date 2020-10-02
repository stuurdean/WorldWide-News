import { NewsService } from './Services/news.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { SearchComponent } from './pages/search/search.component';
import { HttpClientModule} from '@angular/common/http';
import {MatIconModule } from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { DetailSearchComponent } from './pages/detail-search/detail-search.component';
import { GeneralNewsComponent } from './pages/general-news/general-news.component';
import { BusinessNewsComponent } from './pages/business-news/business-news.component';
import { SportsNewsComponent } from './pages/sports-news/sports-news.component';
import { ScienceNewsComponent } from './pages/science-news/science-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    SearchComponent,
    DetailSearchComponent,
    GeneralNewsComponent,
    BusinessNewsComponent,
    SportsNewsComponent,
    ScienceNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,

  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
