import React, {Component} from 'react'
import {Link} from '../routes'

class Nav extends Component {

  render () {

    return (
      <div className="nav">
        <h1>TicketChain</h1>
        <Link route="/new">
          <button>Sell Ticket</button>
        </Link>
      </div>
    )
  }
}

export default Nav
