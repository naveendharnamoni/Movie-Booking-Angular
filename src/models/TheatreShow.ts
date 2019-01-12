import { Movie } from './Movie';
import { ShowTimings } from './ShowTimings';
import { Theatre } from './Theatre';
export class TheatreShow{
    /**
     *
     */
    constructor(public theatreId: Theatre,public shows : ShowTimings[],public movieId : Movie ,public startDate : Date ,public endDate : Date ) {

    }
}