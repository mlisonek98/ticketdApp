import React, {Component} from 'react'
import {Link} from '../routes'
import '../static/style.css'


class BackNav extends Component {

  render () {

    return (
      <div className="nav">
        <h1 className="header">TicketChain</h1>
        <Link route="/">
          <button className="button">Home</button>
        </Link>
      </div>
    )
  }
}

export default BackNav
