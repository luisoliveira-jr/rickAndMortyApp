import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,
  ],
  exports:[
    CharacterListComponent,
    CharacterDetailsComponent,
  ]
})
export class CharactersModule { }
