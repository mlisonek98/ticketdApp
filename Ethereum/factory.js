import web3 from './web3'
import TicketsFactory from './build/TicketsFactory.json'

//get instance of our deployed factory contract
const instance = new web3.eth.Contract(
  JSON.parse(TicketsFactory.interface),
  '0x3e0909491a31995299034d8A8F2e82c8564627dd'
)

export default instance
