//Use of command line 
const yargs = require('yargs')
if(yargs.argv._[0]==="add"){
    console.log(yargs.argv._[0]+" result is "+(yargs.argv._[1]+yargs.argv._[2]))
}
else if(yargs.argv._[0]==="sub"){
    console.log(yargs.argv._[0]+" result is "+(yargs.argv._[1]-yargs.argv._[2]))
}
else if(yargs.argv._[0]==="mul"){
    console.log(yargs.argv._[0]+" result is "+(yargs.argv._[1]*yargs.argv._[2]))
}
else if(yargs.argv._[0]==="div"){
    console.log(yargs.argv._[0]+" result is "+(yargs.argv._[1]/yargs.argv._[2]))
}
else if(yargs.argv._[0]==="mod"){
    console.log(yargs.argv._[0]+" result is "+(yargs.argv._[1]%yargs.argv._[2]))
}