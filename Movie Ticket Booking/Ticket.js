class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Adding prototype method to MovieTicket
MovieTicket.prototype.printTicket = function () {
    return `Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ₹${this.price}`;
};
class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    // Child-specific method
    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const t1 = new OnlineTicket("Avengers: Endgame", "A12", 300, 40);
const t2 = new OnlineTicket("Joker", "C7", 250, 35);

console.log(t1.printTicket());  
console.log("Total Amount:", t1.getTotalAmount());

console.log(t2.printTicket());  
console.log("Total Amount:", t2.getTotalAmount());
