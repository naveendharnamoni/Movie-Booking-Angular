import { Theatre } from './Theatre';
import { TicketType } from './TicketType';
export class TicketPrice{
    /**
     *
     */
    constructor(public id : number,public theatreId : Theatre,public ticketType : TicketType) {
    }
}
