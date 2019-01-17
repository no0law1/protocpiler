const command = 'typescript [dir]';

const describe = 'Generate Typescript for protos';

const builder = { };

const handler = function (argv) {
  console.log(describe)
  console.log(argv)
};

module.exports = {
    command,
    describe,
    builder,
    handler,
};