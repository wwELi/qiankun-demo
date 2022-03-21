const util = require('util');
const path = require('path');
const child_process = require('child_process');
const exec = util.promisify(child_process.exec);

const runStart = async function () {
  // cwd指定子进程的当前工作目录 这里的rm -rf build为删除指定目录下的一个文件夹
  exec(`npm run serve`, {
    cwd: path.join(__dirname, 'order')
  });

  exec(`npm run serve`, {
    cwd: path.join(__dirname, 'portal')
  });

  exec(`npm run serve`, {
    cwd: path.join(__dirname, 'predict')
  });
}
runStart();