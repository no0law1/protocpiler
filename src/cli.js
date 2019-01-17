const createYargs = require('yargs/yargs');
const fs = require('fs');

const cli = () => {
  process.title = 'protocpiler';
  
  return createYargs()
    .commandDir('commands')
    .demandCommand();
};

module.exports = cli;