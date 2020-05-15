const timeId  = setTimeout(()=>{

},1000)

console.log(timeId)  //Node中是对象


console.log(__dirname)

console.log(__filename)



const buffer = Buffer.from("abcdef",'utf-8')
console.log(buffer)

console.log(process.argv)

// process.kill(124)

console.log(process.env.CLASSPATH)