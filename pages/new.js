import React, {Component} from 'react'
import factory from '../Ethereum/factory'
import web3 from '../Ethereum/web3'
import {Router} from '../routes'
import BackNav from '../Components/BackNav'
import '../static/style.css'

class NewTicket extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: '',
      time: ['12:00 A.M.', '1:00 A.M.', '2:00 A.M.', '3:00 A.M.', '4:00 A.M.', '5:00 A.M.', '6:00 A.M.', '7:00 A.M.', '8:00 A.M.', '9:00 A.M.', '10:00 A.M.', '12:00 A.M.', '12:00 P.M.', '1:00 P.M.', '2:00 P.M.', '3:00 P.M.','4:00 P.M.', '5:00 P.M.', '6:00 P.M.', '7:00 P.M.', '8:00 P.M.', '9:00 P.M.', '10:00 P.M.', '11:00 P.M.', '12:00 P.M.']
    }
    this.sellTicket = this.sellTicket.bind(this)
  }

  async sellTicket(evt) {
    evt.preventDefault()
    this.setState({loading: true})
    let info = evt.target.name.value + '/' + evt.target.startTime.value + '/' + evt.target.venue.value +'/' + evt.target.city.value
    let price = evt.target.price.value

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createTicket(price, info)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ error: err.message });
    }

    this.setState({ loading: false });
  }

  render() {

    return (
      <div>
        <BackNav/>
        <div className="outerForm">
          <div>
            <h2>Enter Ticket Information Below</h2>
          </div>
          <form className="form" id="newTicketForm" onSubmit={this.sellTicket}>
            <div>
              <label>Name of Performer</label>
              <input name="name" type="text" required placeholder="Name"/>
            </div>
            <div>
              <select name="startTime" label="Start Time">
              {
                this.state.time.map((time) => {
                  return (
                    <option key={time}>{time}</option>
                  )
                })
              }
              </select>
            </div>
            <div>
              <label>Venue Name</label>
              <input name="venue" type="text" required placeholder="venue" />
            </div>
            <div>
              <label>Venue City</label>
              <input name="city" type="text" required placeholder="city"/>
            </div>
            <div>
              <label>Price</label>
              <input name="price" type="text" required placeholder="00000000"/>
            </div>
            <div>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
        {
          !this.state.loading ? null :
          (
            <div className="loading">
              This Will Take 15-30 Seconds Be Patient!
            </div>
          )
        }
        {
          this.state.error === '' ? null :
          (
            <div className="error">
              <h2>Error! {this.state.error}</h2>
            </div>
          )
        }

      </div>
    )
  }
}

export default NewTicket
