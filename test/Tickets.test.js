const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

const compiledFactory = require('../Ethereum/build/TicketsFactory.json')
const compiledTickets = require('../Ethereum/build/Tickets.json')

let accounts
let factory
let ticketsAddress
let ticket

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).deploy({data: compiledFactory.bytecode}).send({from: accounts[0], gas: '1000000'})

  await factory.methods.createTicket('100', 'Kanye West 9:00 P.M. Barclays Center Brooklyn').send({
    from: accounts[0],
    gas: '1000000'
  })

  const addresses = await factory.methods.getDeployedTickets().call()
  ticketsAddress = addresses[0]

  ticket = await new web3.eth.Contract(
    JSON.parse(compiledTickets.interface),
    ticketsAddress
  )
})

describe('Tickets', () => {
  it('deploys a factory and a ticket contract', () => {
    assert.ok(factory.options.address)
    assert.ok(ticket.options.address)
  })

  it('marks caller as the ticket manager', async () => {
    const manager = await ticket.methods.manager().call()
    assert.equal(accounts[0], manager)
  })

  it('transfers money to manger before destroyed', async () => {
    let firstBalance = await web3.eth.getBalance(accounts[0])
    firstBalance = parseInt(firstBalance)
    await ticket.methods.buyTicket().send({
      value: '100',
      from: accounts[1]
    })
    let secondBalance = await web3.eth.getBalance(accounts[0])
    secondBalance = parseInt(secondBalance)
    assert.equal(secondBalance, firstBalance + 100)
  })

  it('contract is destroyed after someone buys a ticket ', async () => {
    await ticket.methods.buyTicket().send({
      value: '100',
      from: accounts[1]
    })
    const code = await web3.eth.getCode(ticket.options.address)
    assert.equal(code, '0x0')
  })
})
