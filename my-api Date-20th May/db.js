const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url,{useUnifiedTopology:true})
client.connect(function(err){
    if(err){
        console.error(err)
    }
    else{
        console.log("Successfully Connected To Server")
    }
})

module.exports=client