import { Component, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 
  private gifsService = inject(GifsService)

  reSelect(tag:string) {
    this.gifsService.searchTag(tag)
  }

  get tags() {
    return this.gifsService.tagHistory
  }

}
