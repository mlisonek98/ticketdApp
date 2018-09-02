pragma solidity ^0.4.17;

contract TicketsFactory {
    address[] public deployedTickets;

    function createTicket(uint price, string name, string startTime, string venue, string city) public {
        address newTickets = new Tickets(price, name, startTime, venue, city, msg.sender);
        deployedTickets.push(newTickets);
    }

    function getDeployedTickets() public view returns (address[]) {
        return deployedTickets;
    }
}

contract Tickets {
    address public manager;
    uint public ticketPrice;
    struct TicketInfo {
        string concertName;
        string concertStartTime;
        string concertVenue;
        string concertCity;
    }
    address[] buyer;

    function Tickets(uint price, string name, string startTime, string venue, string city, address creator) public payable {
        manager = creator;
        TicketInfo memory newTicketInfo = TicketInfo({
            concertName: name,
            concertStartTime: startTime,
            concertVenue: venue,
            concertCity: city
        });
        ticketPrice = price;
    }

    function buyTicket() public payable {
        require(msg.value == ticketPrice);
        buyer.push(msg.sender);
        manager.transfer(this.balance);
    }
}
