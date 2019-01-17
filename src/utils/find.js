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

module.exports = { findProtoc };