import { Component, OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{

  pickCardAnimation = false;
  currentCard: string = '';
  game!: Game;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }
  takeCard() {
    if(!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop()!;
      console.log('current card', this.currentCard);
      console.log('Game is', this.game);
      this.pickCardAnimation = true;
      setTimeout(() => {
      this.pickCardAnimation = false;
      this.game.playedCards.push(this.currentCard);
    }, 1000)
    }
    
  }
}
