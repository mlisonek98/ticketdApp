pragma solidity ^0.4.17;

contract TicketsFactory {
    address[] public deployedTickets;

    function createTicket(uint price, string info) public {
        address newTickets = new Tickets(price, info, msg.sender);
        deployedTickets.push(newTickets);
    }

    function getDeployedTickets() public view returns (address[]) {
        return deployedTickets;
    }
}

contract Tickets {
    address public manager;
    uint public ticketPrice;
    string public concertInfo;

    function Tickets(uint price, string info, address creator) public payable {
        manager = creator;
        concertInfo = info;
        ticketPrice = price;
    }

    function buyTicket() public payable {
        require(msg.value == ticketPrice);
        manager.transfer(this.balance);
        selfdestruct(manager);
    }
}
