import React, {Component} from 'react'
import factory from '../Ethereum/factory'
import SingleTicket from '../Components/SingleTicket'

class TicketsIndex extends Component {

  static async getInitialProps() {
    const tickets = await factory.methods.getDeployedTickets().call()
    return {tickets}
  }

  render() {
    return (
      <div>
        {
          this.props.tickets.map((address) => {
            return <SingleTicket key={address} address={address} />
          })
        }
      </div>
    )
  }
}

export default TicketsIndex
