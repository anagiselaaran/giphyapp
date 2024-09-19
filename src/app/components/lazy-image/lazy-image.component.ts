import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  standalone: true,
  imports: [],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent {

  @Input() public url!: string
  @Input() public alt!: string
  
  public hasLoaded: boolean = false
  
  ngOnInit(): void{
    if (!this.url) throw new Error('url property required') 
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true
      
    },1000)
    
  }


}
