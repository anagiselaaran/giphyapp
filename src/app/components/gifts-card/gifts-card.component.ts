import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../gifs/interfaces/Gifs.interface';
import { LazyImageComponent } from '../lazy-image/lazy-image.component';

@Component({
  selector: 'app-gifts-card',
  standalone: true,
  imports: [LazyImageComponent],
  templateUrl: './gifts-card.component.html',
  styleUrl: './gifts-card.component.css'
})
export class GiftsCardComponent implements OnInit {
  
  ngOnInit(): void {
    if( !this.gif ) throw new Error('gif property is required');
  }

  @Input() gif! : Gif

}
