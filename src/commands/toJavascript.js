const command = 'javascript [dir]';

const describe = 'Generate Javascript for protos';

const builder = { };

const handler = function (argv) {
    console.log(describe)
    console.log(argv)

    const { execFile } = require('child_process');

    const child = execFile('protoc', ['--version'], { cwd:findProtoc() }, (error, stdout, stderr) => {
        if (error) {
            console.error(error);
        }
        console.log(stdout);
    });
};

const findProtoc = function () {
    const path = require('path');
    const fs = require('fs');
    const protocFile = path.join(process.cwd(), 'tools', 'bin');
    
    if (fs.existsSync(protocFile)) {
        return protocFile
    }

    const protocFile2 = path.join(process.cwd(), 'node_modules', '.bin')
    if(fs.existsSync(protocFile2)){
        return protocFile2
    }
}

module.exports = {
    command,
    describe,
    builder,
    handler,
};