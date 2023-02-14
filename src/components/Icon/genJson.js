const path = require('path');

const oldPath = path.resolve(__dirname, 'iconfont.css');
const newPath = path.resolve(__dirname, 'iconfont.json');

var gen = (module.exports = function() {
  const readline = require('readline');
  const fs = require('fs');

  const fRead = fs.createReadStream(oldPath);
  const fWrite = fs.createWriteStream(newPath, {
    flags: 'w+',
    defaultEncoding: 'utf8',
  });

  const objReadLine = readline.createInterface({
    input: fRead,
  });

  var ret = {};
  var key = null;
  var value = null;
  objReadLine.on('line', line => {
    line = line && line.trim();
    if (!line.includes(':before') && !line.includes('content')) {
      return;
    }
    if (line.includes(':before')) {
      var keyMatch = line.match(/\.(.*?):/);
      key = keyMatch && keyMatch[1];
    }
    if (line.includes('content')) {
      var valueMatch = line.match(/content:.*?\\(.*?);/);
      value = valueMatch && valueMatch[1];
      value = parseInt(value, 16);
      if (key && value) {
        ret[key] = value;
        key = null;
        value = null;
      }
    }
  });

  objReadLine.on('close', () => {
    fWrite.write(JSON.stringify(ret), 'utf8');
  });
});

gen();
