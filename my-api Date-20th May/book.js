const client = require('./db')
const db = client.db('itcdb')
const books = db.collection('books')
const addbook= async (book)=>{
    await books.insertOne(book).then((data)=>{console.log("Successfully Inserted")})
    client.close();
}
const deletebook = async(bookid)=>{
    await books.deleteOne(bookid).then((data)=>{console.log("Deleted :- "+data.deletedCount)})
    client.close();
}
module.exports = {addbook,deletebook}