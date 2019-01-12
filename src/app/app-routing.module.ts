import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { MovieTheatresComponent } from './movie-theatres/movie-theatres.component';

const routes: Routes = [
  {path:'', redirectTo:'/index', pathMatch:'full'},
  {path:'index',component:MoviesComponent},
  { path: 'TheatresList/:id', component: MovieTheatresComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
