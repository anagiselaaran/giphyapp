import { Component, Input } from '@angular/core';
import { Gif } from '../../gifs/interfaces/Gifs.interface';
import { GiftsCardComponent } from '../gifts-card/gifts-card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [GiftsCardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input() gifs: Gif[] = []
  

}
