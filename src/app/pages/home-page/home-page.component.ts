import { Component, inject } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../gifs/interfaces/Gifs.interface';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [SearchBoxComponent,CardListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  gifsService = inject(GifsService)

  get gifs(): Gif[]{
    return this.gifsService.gifsList
  }





}
