import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CharacterListComponent } from '../character-list/character-list.component';
import { FormSearchComponent } from '../form-search/form-search.component';
import { CharacterDetailsComponent } from '../character-details/character-details.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    CharacterListComponent,
    FormSearchComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
