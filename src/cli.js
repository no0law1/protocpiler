const createYargs = require('yargs/yargs');

const cli = () => {
  process.title = 'protocpiler';
  
  return createYargs()
    .commandDir('commands')
    .demandCommand();
};

module.exports = cli;