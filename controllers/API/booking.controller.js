const { ObjectId } = require('mongodb')
const DB = require('../../db.config')
const Bookings = DB.client.db(process.env.DATABASE_NAME||'test').collection('bookings')
// ===================== GET Booking  =================
exports.index = async(req,res)=>{
try {
  let result = {status:"success"}
    result.data =  await  Bookings.find({}).toArray()
    result.message = result.data.length
    res.send(result) 
  
} 
catch (error) {console.log(error) }
}
// ===================== Booking create =================
exports.create = async(req,res)=>{
try {
  const newBooking = req.body
  let result = {status:"success"}
    result.data =  await  Bookings.insertOne({newBooking})
    result.message = result.data.length
    res.send(result) 
  
} 
catch (error) {console.log(error) }
}
// ===================== Booking delete =================
exports.delete = async(req,res)=>{
  try {
    const ID = req.params.ID
    let result = {status:"success"}
      result.data =  await  Bookings.deleteOne({"_id": new ObjectId(ID)})
      result.message = result.data.length
      res.send(result) 
    
  } 
  catch (error) {console.log(error) }
  }
