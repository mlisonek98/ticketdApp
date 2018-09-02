import React, {Component} from 'react'
import factory from '../Ethereum/factory'

class TicketsIndex extends Component {

  async componentDidMount() {
    const tickets = await factory.methods.getDeployedTickets().call()
    console.log(tickets)
  }

  render() {
    return (
      <div>
        <h1>Fuck You Nigga</h1>
      </div>
    )
  }
}

export default TicketsIndex
