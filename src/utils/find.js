const findProtos = function(input_dir) {
    const path = require('path');
    const fs = require('fs');
    var files = fs.readdirSync(input_dir);
    return files
        .filter(file => file.endsWith('.proto'))
        .map(file => path.join(input_dir, file))
}

module.exports = { findProtos };