const path = require('path');
const fs = require('file-system');

module.exports = function(content) {
    this.cacheable && this.cacheable();
    const filePath = extractFilePath(this.query);
    const variableOverwrites = filePath ? fs.readFileSync(filePath, 'utf-8') : '';
    return content + '\n' + variableOverwrites;
}

function extractFilePath(query) {
    if (!query) {
        return null;
    }
    const filePathStart = query.indexOf('file=') + 5;
    const ampIndexAfterStart = query.indexOf('&', filePathStart); 
    const filePathEnd =  ampIndexAfterStart > -1 ? ampIndexAfterStart : query.length;
    return path.join(__dirname, '..', query.substring(filePathStart, filePathEnd));
}