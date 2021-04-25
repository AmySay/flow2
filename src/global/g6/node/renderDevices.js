
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
let id = 0
for (let file of files) {
  console.log(file)
  // console.log(fs.lstatSync(file))
  let str = `
  {
    id: ${id++},
    imgUrl:'./icon/${file}',
    name: '${file.split(".")[0]}',
    type: 'icon',
    typeId: 'icon',
  },
  `
  console.log(str)
  appendFile("test.js", str,error => {
    if (error) return console.log("写入文件失败,原因是" + error.message);
    console.log("写入成功");
  });
}
