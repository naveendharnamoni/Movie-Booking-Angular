import { Injectable } from '@angular/core';
import { Movie } from 'src/models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies = [
    new Movie(1,"Kgf","Kannada"),
    new Movie(2,"Simmba","Telugu"),
    new Movie(3,"Petta","Tamil"),
    new Movie(4,"Bumblebee","English"),
    new Movie(5,"Antariksham","Telugu")
  ]
  constructor() { }
}
