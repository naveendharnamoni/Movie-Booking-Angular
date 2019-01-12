import { Component, OnInit } from '@angular/core';
import { ShowtimeService } from '../Service/showtime.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/Movie';
import { TheatreShow } from '../../models/TheatreShow';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {
 
  ngOnInit(){
    
  }
}
