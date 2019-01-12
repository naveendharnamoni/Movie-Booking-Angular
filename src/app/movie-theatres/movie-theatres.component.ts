import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { ShowtimeService } from '../Service/showtime.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Theatre } from '../../models/Theatre';

@Component({
  selector: 'app-movie-theatres',
  templateUrl: './movie-theatres.component.html',
  styleUrls: ['./movie-theatres.component.scss']
})
export class MovieTheatresComponent implements OnInit {
  movie : Movie;
  theatreShows;
  theatres : Theatre[];
  constructor(private service : ShowtimeService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.loadMovie(+this.route.snapshot.paramMap.get('id'));
    this.setTheatreShows();
    this.getAllTheatres();
  }
  loadMovie(id){
    this.movie =this.service.getMovie(id);
    console.log(this.movie.id);
  }
  setTheatreShows(){
    this.theatreShows = this.service.getTheatreShows(this.movie.id);
  }
  getAllTheatres(){
    //this.theatres = this.theatreShows.f
   /* this.theatreShows.forEach(theatreshow => {
      if(this.theatres.filter(theatre => theatre.name == theatreshow.theatreId.name).length == 0){
        this.theatres.push(theatreshow.theatreId);
     }  
    });*/
    console.log(this.theatres);
  }
}
