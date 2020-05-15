1.安装node智能提示

```
npm i @types/node 
```


2._dirname  _filename  并不是global里属性
``` 
console.log(__dirname)   //当前文件所在得绝对路径   D:\YUAN_NODE\一.node核心\2.全局对象
console.log(__filename)  //当前文件路径   D:\YUAN_NODE\一.node核心\2.全局对象\1.js

```

3.Butter    
- 类型化数组
- 继承于UInt8Array(无符号 每个数字是整数占8位 1个字节（0-255）)   
- 计算机存储得单位：字节   二进制->十六进制<http://blog.yuanjin.tech/article/94>

```
const buffer = Buffer.from("abcdef",'utf-8')
console.log(buffer)  //<Buffer 61 62 63 64 65 66>
```

4.process  (常用于获取不同操作系统的命令行参数)
- cwd 当前node进程的命令行（绝对路径）
- exit 强制退出node进程  process.exit()
- argv 获取命令行中的所有参数  process.argv 
```
console.log(process.argv) 
结果:
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\YUAN_NODE\\一.node核心\\2.全局对象\\1.js'
]

```
5.platform 获取操作系统
```
console.log(process.platform)

```

6.kill 杀死进程
```
process.kill(pid)

```

7.env  环境变量
```
console.log(process.env)

```

8.setTimeout global中是个对象  window中是个数字

9.setImmediate  相当于setTimeout(()=>{},0)