const fs = require('fs')
const yargs = require('yargs')
//Using Command Line And Reading And Writing Into A File Similar To Exercise 4 But Different Program
if(yargs.argv._[0]==="add"){
    fs.readFile('data2.json',(err,data)=>{
        const result=JSON.parse(data.toString())
        result.push({title:yargs.argv.title,category:yargs.argv.category})

        const jsonstr = JSON.stringify(result)
        fs.writeFile('data2.json',jsonstr,(error)=>{
        if(!error){
            console.log("File Write Successfully.")
            }
        })
    })
}
else if(yargs.argv._[0]==="del"){
    fs.readFile('data2.json',(err,data)=>{
        const result=JSON.parse(data.toString())
        result.push({title:yargs.argv.title,category:yargs.argv.category})
        const filter_result = result.filter((obj)=>{obj.title!==yargs.argv.title})
        const jsonstr = JSON.stringify(filter_result)
        fs.writeFile('data2.json',jsonstr,(error)=>{
        if(!error){
            console.log("Deleted Successfully.")
            }
        })
    })
}