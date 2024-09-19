import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>
  gifsService = inject(GifsService)
  
  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    
    this.gifsService.searchTag(newTag)

    this.tagInput.nativeElement.value = ''
  }
}
