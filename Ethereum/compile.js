const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

//find previous build file and delete it
const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

//find contract file path and read it
const ticketPath = path.resolve(__dirname, 'Contracts', 'Tickets.sol')
const source = fs.readFileSync(ticketPath, 'utf8')

//compile the contracts
const output = solc.compile(source, 1).contracts

//create build folder
fs.ensureDirSync(buildPath)

//loop over contracts and write it to the build folder
for (contract in output) {
   fs.outputJsonSync(
     path.resolve(buildPath, contract.replace(':', '') + '.json'),
     output[contract]
   )
}
