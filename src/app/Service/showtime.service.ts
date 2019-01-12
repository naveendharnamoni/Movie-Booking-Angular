import { ShowTimings } from './../../models/ShowTimings';
import { Theatre } from './../../models/Theatre';
import { TheatreShow } from '../../models/TheatreShow';
import { Injectable } from '@angular/core';
import { Movie } from 'src/models/Movie';

@Injectable({
  providedIn: 'root'
})
export class ShowtimeService {
  movies = [
    new Movie(1,"Kgf","Kannada"),
    new Movie(2,"Simmba","Hindi"),
    new Movie(3,"Petta","Tamil"),
    new Movie(4,"Bumblebee","English"),
    new Movie(5,"Antariksham","Telugu")
  ]
  theatres = [
    new Theatre(1,"PVR Icon"),
    new Theatre(2,"Cinepolis"),
    new Theatre(3,"SVC Mahalaxmi"),
    new Theatre(4,"Prasads Imax"),
    new Theatre(5,"Sudharshan 35mm"),
    new Theatre(6,"Bvk vijayalaxmi"),
    new Theatre(7,"Meeraj cinemas"),
    new Theatre(8,"Asian Cinemas"),
  ]
  showTimings = [
    new ShowTimings(1,"10:00 AM"),
    new ShowTimings(2,"11:00 AM"),
    new ShowTimings(3,"12:00 PM"),
    new ShowTimings(4,"01:15 PM"),
    new ShowTimings(5,"02:00 PM"),
    new ShowTimings(6,"03:15 PM"),
    new ShowTimings(7,"05:00 PM"),
    new ShowTimings(8,"06:15 PM"),
    new ShowTimings(9,"07:00 PM"),
    new ShowTimings(10,"09:15 PM"),
    new ShowTimings(11,"10:00 AM")
  ]
  theatreShows = [
    new TheatreShow( this.getTheatre(1),[this.getShow(1),this.getShow(3),this.getShow(5),this.getShow(7)],this.getMovie(1),new Date(),this.addDaysToDate(5)),
    new TheatreShow( this.getTheatre(2),[this.getShow(2),this.getShow(5),this.getShow(10),this.getShow(8)],this.getMovie(3),new Date(),this.addDaysToDate(5)),
    new TheatreShow( this.getTheatre(3),[this.getShow(2)],this.getMovie(3),new Date(),this.addDaysToDate(8)),
    new TheatreShow( this.getTheatre(4),[this.getShow(3)],this.getMovie(3),new Date(),this.addDaysToDate(8)),
    new TheatreShow( this.getTheatre(5),[this.getShow(9)],this.getMovie(3),new Date(),this.addDaysToDate(8)),
    new TheatreShow( this.getTheatre(6),[this.getShow(8)],this.getMovie(3),new Date(),this.addDaysToDate(8)),
    new TheatreShow( this.getTheatre(7),[this.getShow(3)],this.getMovie(3),new Date(),this.addDaysToDate(8)),
    new TheatreShow( this.getTheatre(8),[this.getShow(10)],this.getMovie(3),new Date(),this.addDaysToDate(8)),
  ]

  
  constructor() { }

    getTheatre(id){
      return this.theatres.find(x => x.id == id);
    }
    getShow(id){
      return this.showTimings.find(x => x.id == id);
    }
    getMovie(id){
      return this.movies.find(x => x.id == id);
    }
    addDaysToDate(numberOfDaysToAdd){
      var someDate = new Date();
      someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
      return someDate;
    }
    getTheatreShows(id){
      return this.theatreShows.filter(theatreShow => theatreShow.movieId.id == id);
    }
}
