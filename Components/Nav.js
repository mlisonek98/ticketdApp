import React, {Component} from 'react'
import {Link} from '../routes'
import '../static/style.css'


class Nav extends Component {

  render () {

    return (
      <div className="nav">
        <h1 className="header">TicketChain</h1>
        <Link route="/new">
          <button className="button">Sell Ticket</button>
        </Link>
      </div>
    )
  }
}

export default Nav
