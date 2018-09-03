import React, {Component} from 'react'
import Tickets from '../Ethereum/ticket'


class SingleTicket extends Component {

  constructor(props) {
    super(props)
    this.state = {
      concert: [],
      price: ''
    }
  }

  async componentDidMount() {
    const ticket = Tickets(this.props.address)
    const ticketInfo = await ticket.methods.concertInfo().call()
    const info = ticketInfo.split('/')
    const ticketPrice = await ticket.methods.ticketPrice().call()
    this.loadInfo(info, ticketPrice)
  }

  loadInfo(info, price) {
    this.setState({concert: info})
    this.setState({price: '' + price})
  }

  buyTicket() {
    console.log('hi')
  }

  render(){

    return (
      <div>
        <div className="ticket">
          <div className="ticketHeader">
            <h1>{this.state.concert[0]}</h1>
            <h2>{this.state.price} wei</h2>
          </div>
          <div className="ticketmeta">
            <h4>Starts at {this.state.concert[1]}</h4>
            <h5>{this.state.concert[2]} in {this.state.concert[3]}</h5>
          </div>
          <div>
            <button type="submit" onClick={this.buyTicket}>Buy</button>
          </div>
        </div>
      </div>

    )
  }
}

export default SingleTicket
