
const {
  appendFile,
  readdirSync
} = require('fs')
const {resolve} = require('path')
console.log('__dirname : ' + __dirname)
console.log('resolve   : ' + resolve('./'))
// const dir = '/Users/flavio/folder'
const files = readdirSync(resolve('./'))
//
for (let file of files) {
  console.log(file)
  // console.log(fs.lstatSync(file))
  let str = `'${file.split(".")[0]}':{width:'80',height:'80',anchorPoints:[[0, 0.5], [1, 0.25], [1, 0.75]]},
  `
  console.log(str)
  appendFile("test.js", str,error => {
    if (error) return console.log("写入文件失败,原因是" + error.message);
    console.log("写入成功");
  });
}
