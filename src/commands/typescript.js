const path = require('path');

const command = 'typescript [input_dir] [output_dir]';

const describe = 'Generate Typescript for protos';

const builder = { };

const handler = function (argv) {
    const { findProtoc, findProtos } = require('../utils/find');
    const { execFile } = require('child_process');

    const protoc = findProtoc();
    const protoc_gen_ts = path.join(process.cwd(), 'node_modules', '.bin');

    const options = [
        '--proto_path=' + path.join(process.cwd(), argv.input_dir),
        '--plugin=protoc-gen-ts=' + path.join(protoc_gen_ts, 'protoc-gen-ts.cmd'),
        '--js_out=import_style=commonjs:' + path.join(process.cwd(), argv.output_dir),
        '--ts_out=' + path.join(process.cwd(), argv.output_dir)
    ]

    const protos = findProtos(path.join(process.cwd(), argv.input_dir));

    const child = execFile('protoc', options.concat(protos), { cwd: protoc }, (error, stdout, stderr) => {
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

/**
 * proto_path="src/model"
project_path="src/model"
protoc_gen_ts_path="$(dirname $0)/node_modules/.bin/"

protoc \
    --proto_path=$proto_path \
    --plugin=protoc-gen-ts=$protoc_gen_ts_path/protoc-gen-ts.cmd \
    --js_out=import_style=commonjs:$project_path \
    --ts_out=$project_path \
    $proto_path/*.proto

read
 */