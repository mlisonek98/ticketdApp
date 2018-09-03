import React, {Component} from 'react'
import Tickets from '../Ethereum/ticket'
import web3 from '../Ethereum/web3'


class SingleTicket extends Component {

  constructor(props) {
    super(props)
    this.state = {
      concert: [],
      price: '',
      loading: false,
      error: '',
      deleted: false
    }
    this.loadInfo = this.loadInfo.bind(this)
    this.buyTicket = this.buyTicket.bind(this)
  }

  async componentDidMount() {
    try {
      const ticket = Tickets(this.props.address)
      const ticketInfo = await ticket.methods.concertInfo().call()
      const info = ticketInfo.split('/')
      const ticketPrice = await ticket.methods.ticketPrice().call()
      this.loadInfo(info, ticketPrice)
    } catch (err) {
      console.log(err)
      this.setState({deleted: true})
    }
  }

  loadInfo(info, price) {
    this.setState({concert: info})
    this.setState({price: '' + price})
  }

  async buyTicket(evt) {
    evt.preventDefault()
    const ticket = Tickets(this.props.address)
    this.setState({loading: true})

    try {
      const accounts = await web3.eth.getAccounts();
      await ticket.methods.buyTicket().send({
        from: accounts[0],
        value: this.state.price
      });
    } catch (err) {
      this.setState({ error: err.message });
    }

    this.setState({ loading: false});
  }

  render(){

    return (
      this.state.deleted ? null :
      <div>
        <div className="ticket">
          <div className="ticketHeader">
            <h1>{this.state.concert[0]}</h1>
            <h2>{this.state.price + ' wei'}</h2>
          </div>
          <div className="ticketmeta">
            <h4>{'Starts at ' + this.state.concert[1]}</h4>
            <h5>{this.state.concert[2] + ' in '}{this.state.concert[3]}</h5>
          </div>
          <div>
            <button className="ticketButton" type="submit" onClick={this.buyTicket}>Buy</button>
          </div>
          {
            !this.state.loading ? null :
            (
              <div className="loading">
                <h4>This takes 15-30 Seonds, please wait!</h4>
              </div>
            )
          }
          {
            this.state.error === '' ? null :
            <div className="error">
              <h4>Error! {this.state.error}</h4>
            </div>
          }
        </div>
      </div>

    )
  }
}

export default SingleTicket
