import { CharacterService } from '@app/shared/services/character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from '@app/shared/interfaces/character.interface';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<Character> | undefined;

  constructor(
    private route: ActivatedRoute,
    private characterservice: CharacterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterservice.getDetails(id);
    });
  }

  onGoBack():void{
    this.location.back();
  }


}
