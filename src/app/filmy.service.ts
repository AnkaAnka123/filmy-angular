import { Injectable } from '@angular/core';
import { Film } from './modele/film'

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

 private filmy: Film[] = [
    {id: 0, tytul: 'Titanic', opis: 'Rok 1912, brytyjski statek Titanic wyrusza w dziewiczy rejs do USA.', rok: 1997},
    {id: 1, tytul: 'Terminator', opis: 'Elektroniczny morderca zostae wynajęty...', rok: 1984},
    {id: 2, tytul: 'Avatar', opis: 'Jake sparaliżowany były komandos, zostaje', rok: 2009}
  ];

  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }
  getFilm(id: number): Film {
    return this.filmy[id];
  }
}
