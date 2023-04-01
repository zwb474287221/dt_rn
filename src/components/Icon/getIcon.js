const fs = require('fs');
// node path模块
const path = require('path');
// 被读取的文件夹地址
const filePath = path.resolve('./src/assets/icon');

// 新地址
const newPath = path.resolve(__dirname, 'icon.js');
// 收集所有的文件路径
const arr = [];
const fileDisplay = filePath => {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    
    const drakIcon = {}, lightIcon = {};
    files.forEach((filename) => {
      console.log(filename);
      const _file = filename.split('_');
      if (_file.includes('drak.png')) {
        drakIcon[_file[0]] = `require('@/assets/icon/${filename}')`;
      } else if (_file.includes('light.png')) {
        lightIcon[_file[0]] = `require('@/assets/icon/${filename}')`;
      } else {
        const key = filename.split('.')[0];
        if (!key) return;
        drakIcon[key] = `require('@/assets/icon/${filename}')`;
        lightIcon[key] = `require('@/assets/icon/${filename}')`;
      }
    });
    const fWrite = fs.createWriteStream(newPath, {
      flags: 'w+',
      defaultEncoding: 'utf8',
    });
    const content = `export const drakIcon = ${JSON.stringify(drakIcon)}
export const lightIcon = ${JSON.stringify(lightIcon)}`.replaceAll('"', '');
    fWrite.write(content, 'utf8');
    console.log('生成Icon成功');
  });
}
fileDisplay(filePath);