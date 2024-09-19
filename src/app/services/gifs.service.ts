import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SearchResponse , Gif} from '../gifs/interfaces/Gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gif[] = [];

  private apiKey: string = 'fC3nTw67AeGDR4xFJ5v5m8jADWa650ov'
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'
  private httpClient = inject(HttpClient)

  private _tagsHistory: string[] = []
  
  constructor() { 
    this.loadLocalStorage()
  }

    get tagHistory() {
      return this._tagsHistory
    }

  
    private organizeHistory(tag: string) {
      tag = tag.toLowerCase()
      if (this._tagsHistory.includes(tag)) {
        this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag) //devuelve un array con los tag q no cumplen con el recin tipeado,oldtag son los q ya estan en el array
      }
      this._tagsHistory.unshift(tag) // agregamos el nuevo tag al inicio
      this._tagsHistory = this._tagsHistory.splice(0, 10)// mostramos solo los primeros 10
      this.saveLocalStorage()
    }
  
  
  private saveLocalStorage(): void{
      localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  
  private loadLocalStorage(): void{
    if (!localStorage.getItem('history')) return; //con el return se sale de la funcion si no cumple, no hace nada
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!)

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0])
  }


    searchTag(tag: string):void {
      if (tag.length === 0) return;
      this.organizeHistory(tag)
      const params = new HttpParams()
        .set('api_key', this.apiKey) 
        .set('limit', 10)
        .set('q', tag)
    
      this.httpClient.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
        .subscribe((resp) => {
          this.gifsList = resp.data;
        
        })
    
   /*  fetch('https://api.giphy.com/v1/gifs/search?api_key=FX3hZMg4qf601ylnJRLOUDx27cbax5BE&q=arrow&limit=10')
      .then(resp => resp.json())
      .then(data => console.log(data)) */

  }
  
}
