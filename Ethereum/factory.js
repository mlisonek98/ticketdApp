import web3 from './web3'
import TicketsFactory from './build/TicketsFactory.json'

//get instance of our deployed factory contract
const instance = new web3.eth.Contract(
  JSON.parse(TicketsFactory.interface),
  '0x1c81faa36Ce86ADf5174E14840183600778269FC'
)

export default instance
