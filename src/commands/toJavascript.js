const command = 'javascript [input_dir] [output_dir]';

const describe = 'Generate Javascript for protos';

const builder = { };

const handler = function (argv) {
    const path = require('path');
    const { findProtoc, findProtos } = require('../utils/find');
    const { execFile } = require('child_process');

    const protoc = findProtoc();

    process.env["PATH"] += ';' + protoc;

    const options = [
        '--proto_path=' + path.join(process.cwd(), argv.input_dir),
        '--js_out=import_style=commonjs:' + path.join(process.cwd(), argv.output_dir)
    ]

    const protos = findProtos(path.join(process.cwd(), argv.input_dir));

    const child = execFile('protoc', options.concat(protos), { cwd: protoc, env: { PATH: process.env["PATH "]} }, (error, stdout, stderr) => {
        if (error) {
            console.error('ERROR: ', error);
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