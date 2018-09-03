import React, {Component} from 'react'
import factory from '../Ethereum/factory'
import SingleTicket from '../Components/SingleTicket'
import Nav from '../Components/Nav'
import '../static/style.css'

class TicketsIndex extends Component {

  static async getInitialProps() {
    const tickets = await factory.methods.getDeployedTickets().call()
    return {tickets}
  }

  render() {
    return (
      <div id="app">
        <Nav />
        <div className="tickets">
          {
            this.props.tickets.map((address) => {
              return <SingleTicket key={address} address={address} />
            })
          }
        </div>
      </div>
    )
  }
}

export default TicketsIndex
