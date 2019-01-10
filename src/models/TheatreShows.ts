import { Movie } from './Movie';
import { ShowTimings } from './ShowTimings';
import { Theatre } from './Theatre';
export class TheatreShow{
    /**
     *
     */
    constructor(public theatreId: Theatre,public showId : ShowTimings, movieId : Movie , startDate : Date , endDate : Date ) {

    }
}