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

const findProtos = function(input_dir) {
    const path = require('path');
    const fs = require('fs');
    var files = fs.readdirSync(input_dir);
    return files
        .filter(file => file.endsWith('.proto'))
        .map(file => path.join(input_dir, file))
}

module.exports = { findProtoc, findProtos };