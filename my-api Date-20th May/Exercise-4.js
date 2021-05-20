const fs = require('fs')
const yargs = require('yargs')
//Using Command Line And Reading And Writing Into A File
if(yargs.argv._[0]==="add"){
    fs.readFile('data.json',(err,data)=>{
        const result=JSON.parse(data.toString())
        result.push({Add:yargs.argv._[1]+yargs.argv._[2]})

        const jsonstr = JSON.stringify(result)
        fs.writeFile('data.json',jsonstr,(error)=>{
        if(!error){
            console.log("File Write Successfully.")
            }
        })
    })
}
else if(yargs.argv._[0]==="sub"){
    fs.readFile('data.json',(err,data)=>{
        const result=JSON.parse(data.toString())
        result.push({Sub:yargs.argv._[1]-yargs.argv._[2]})

        const jsonstr = JSON.stringify(result)
        fs.writeFile('data.json',jsonstr,(error)=>{
        if(!error){
            console.log("File Write Successfully.")
            }
        })
    })
}
else if(yargs.argv._[0]==="mul"){
    fs.readFile('data.json',(err,data)=>{
        const result=JSON.parse(data.toString())
        result.push({Mul:yargs.argv._[1]*yargs.argv._[2]})

        const jsonstr = JSON.stringify(result)
        fs.writeFile('data.json',jsonstr,(error)=>{
        if(!error){
            console.log("File Write Successfully.")
            }
        })
    })
}
else if(yargs.argv._[0]==="div"){
    fs.readFile('data.json',(err,data)=>{
        const result=JSON.parse(data.toString())
        result.push({Div:yargs.argv._[1]/yargs.argv._[2]})

        const jsonstr = JSON.stringify(result)
        fs.writeFile('data.json',jsonstr,(error)=>{
        if(!error){
            console.log("File Write Successfully.")
            }
        })
    })
}
else if(yargs.argv._[0]==="mod"){
    fs.readFile('data.json',(err,data)=>{
        const result=JSON.parse(data.toString())
        result.push({Mod:yargs.argv._[1]%yargs.argv._[2]})

        const jsonstr = JSON.stringify(result)
        fs.writeFile('data.json',jsonstr,(error)=>{
        if(!error){
            console.log("File Write Successfully.")
            }
        })
    })
}