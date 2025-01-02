class RailwayReservationSystem {
    constructor() {
        this.totalConfirmed = 63;
        this.totalRAC = 9;
        this.totalWaitingList = 10;

        this.confirmedTickets = [];
        this.RACTickets = [];
        this.waitingList = [];
    }

    bookTicket(passenger) {
        if (passenger.age < 5) {
            console.log(`Booking not allowed for children under 5. Details stored.`);
            return;
        }

        if (this.confirmedTickets.length < this.totalConfirmed) {
            this.allocateConfirmedTicket(passenger);
        } else if (this.RACTickets.length < this.totalRAC) {
            this.allocateRACTicket(passenger);
        } else if (this.waitingList.length < this.totalWaitingList) {
            this.waitingList.push(passenger);
            console.log(`Added to waiting list: ${passenger.name}`);
        } else {
            console.log(`No tickets available.`);
        }
    }

    cancelTicket(ticketId) {
        const index = this.confirmedTickets.findIndex(t => t.id === ticketId);
        if (index >= 0) {
            this.confirmedTickets.splice(index, 1);
            this.handleCancellation();
            console.log(`Ticket cancelled: ID ${ticketId}`);
        } else {
            console.log(`Ticket not found: ID ${ticketId}`);
        }
    }

    handleCancellation() {
        if (this.RACTickets.length > 0) {
            const racPassenger = this.RACTickets.shift();
            this.allocateConfirmedTicket(racPassenger);

            if (this.waitingList.length > 0) {
                const waitingPassenger = this.waitingList.shift();
                this.allocateRACTicket(waitingPassenger);
            }
        }
    }

    allocateConfirmedTicket(passenger) {
        passenger.ticketType = 'Confirmed';
        passenger.berth = this.getPreferredBerth(passenger);
        this.confirmedTickets.push(passenger);
        console.log(`Confirmed ticket allocated: ${passenger.name}`);
    }

    allocateRACTicket(passenger) {
        passenger.ticketType = 'RAC';
        passenger.berth = 'Side Lower';
        this.RACTickets.push(passenger);
        console.log(`RAC ticket allocated: ${passenger.name}`);
    }

    getPreferredBerth(passenger) {
        if (passenger.age > 60 || (passenger.gender === 'Female' && passenger.withChild)) {
            return 'Lower';
        }
        return passenger.berthPreference || 'Any';
    }

    printBookedTickets() {
        console.log(`\nBooked Tickets:`);
        this.confirmedTickets.forEach(ticket => {
            console.log(`${ticket.id}: ${ticket.name}, ${ticket.age}, ${ticket.gender}, ${ticket.berth}`);
        });
        console.log(`Total booked tickets: ${this.confirmedTickets.length}`);
    }

    printAvailableTickets() {
        const availableConfirmed = this.totalConfirmed - this.confirmedTickets.length;
        const availableRAC = this.totalRAC - this.RACTickets.length;
        const availableWaiting = this.totalWaitingList - this.waitingList.length;

        console.log(`\nAvailable Tickets:`);
        console.log(`Confirmed: ${availableConfirmed}`);
        console.log(`RAC: ${availableRAC}`);
        console.log(`Waiting List: ${availableWaiting}`);
    }
}

// Sample Usage
const system = new RailwayReservationSystem();

system.bookTicket({ id: 1, name: 'Alice', age: 65, gender: 'Female', berthPreference: 'Lower', withChild: false });
system.bookTicket({ id: 2, name: 'Bob', age: 30, gender: 'Male', berthPreference: 'Upper', withChild: false });
system.bookTicket({ id: 3, name: 'Cathy', age: 28, gender: 'Female', berthPreference: 'Middle', withChild: true });

system.printBookedTickets();
system.printAvailableTickets();

system.cancelTicket(1);

system.printBookedTickets();
system.printAvailableTickets();
