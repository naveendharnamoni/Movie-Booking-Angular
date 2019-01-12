import { Movie } from 'src/models/Movie';
import { Component, OnInit } from '@angular/core';
import { ShowtimeService } from '../Service/showtime.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    movies : Movie[];

  constructor(movieService : ShowtimeService) {
      this.movies = movieService.movies;
   }

  ngOnInit() {
  }

}
