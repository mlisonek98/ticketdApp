import web3 from './web3'
import TicketsFactory from './build/TicketsFactory.json'

//get instance of our deployed factory contract
const instance = new web3.eth.Contract(
  JSON.parse(TicketsFactory.interface),
  '0x8d32641521179A30608C78AA9bdf0720903925A3'
)

export default instance
