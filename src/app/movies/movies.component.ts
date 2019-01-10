import { Movie } from 'src/models/Movie';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies-list',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    movies : Movie[];

  constructor(movieService : MovieService) {
      this.movies = movieService.movies;
   }

  ngOnInit() {
  }

}
