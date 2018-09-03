import web3 from './web3'
import Tickets from './build/Tickets.json'

export default address => {
  return new web3.eth.Contract(JSON.parse(Tickets.interface), address)
}
