const books = require('./book')
const yargs = require('yargs')
if(yargs.argv._[0]==="add"){
    books.addbook({_id:yargs.argv.id,title:yargs.argv.title,category:yargs.argv.category})
}
else if(yargs.argv._[0]==="delete"){
    books.deletebook({_id:yargs.argv.id})
}