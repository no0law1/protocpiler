const command = 'javascript [dir]';

const describe = 'Generate Javascript for protos';

const builder = { };

const handler = function (argv) {
    console.log(describe)
    console.log(argv)

    const { findProtoc } = require('../utils/find')

    const { execFile } = require('child_process');

    const child = execFile('protoc', ['--version'], { cwd:findProtoc() }, (error, stdout, stderr) => {
        if (error) {
            console.error(error);
        }
        console.log(stdout);
    });
};

module.exports = {
    command,
    describe,
    builder,
    handler,
};