// 用nodejs实现读取指定本地目录文件，生成html文件，并包含文件目录树结构的展示及样式的脚本

console.log('hello');

var fs = require('fs');

function geFileList(path) {
  var filesList = [];
  var targetObj = {};
  readFile(path, filesList, targetObj);
  return filesList;
}

//遍历读取文件
function readFile(path, filesList, targetObj) {

  files = fs.readdirSync(path); //需要用到同步读取

  console.log(files);
  

  files.forEach(walk);

  function walk(file) {
    states = fs.statSync(path + '/' + file);
    console.log(states);
    
    if (states.isDirectory()) {
      var item;
      if (targetObj['children']) {
        item = {name: file, children: []};
        targetObj['children'].push(item);
      } else {
        item = {name: file, children: []};
        filesList.push(item);
      }
      readFile(path + '/' + file, filesList, item);
    } else {
      //创建一个对象保存信息
      var obj = new Object();
      obj.size = states.size; //文件大小，以字节为单位
      obj.name = file; //文件名
      obj.path = path + '/' + file; //文件绝对路径

      if (targetObj['children']) {
        var item = {name: file, value: obj.path};
        targetObj['children'].push(item);
      } else {
        var item = {name: file, value: obj.path};
        filesList.push(item);
      }
    }
  }
}

//写入文件utf-8格式
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, 'utf-8', complete);
  function complete() {
    console.log('文件生成成功');
  }
}

var filesList = geFileList('./server');
var str = JSON.stringify(filesList);
str = "var data ={name:'Egret',children:#1}".replace('#1', str);
writeFile('tree.js', str);
