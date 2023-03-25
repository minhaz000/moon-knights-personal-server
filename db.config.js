require('dotenv').config()

const {MongoClient } = require('mongodb')
// DataBase Connection
const  url = process.env.DATABASE_URL||'mongodb://localhost:27017/test'
 const client = new MongoClient(url)
exports.connectDB =  async ()=>{
      try {
            await client.connect()
            console.log('DataBase connection established successfully'.cyan.bold)
      } 
      catch(err){ console.log( err.message.red.bold) }

    
}
exports.client = client
