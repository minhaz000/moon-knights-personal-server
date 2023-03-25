const { ObjectId } = require('mongodb')
const DB = require('../../db.config')
const Flights = DB.client.db(process.env.DATABASE_NAME||'test').collection('flights')
//========================== GET Room ==================================================

exports.index = async(req,res)=>{
try{
    let result = {status:"success"}
    result.data =  await  Flights.find({}).toArray()
   
    result.message = result.data.length
    res.send(result) 
} 
catch (error) { console.log(error)}
}
//========================== GET  Room BY ID ==================================================

exports.getRoomByID = async (req,res)=>{
try{
    const ID = req.params.ID
    let result = {status:"success"}
    result.data =  await  Flights.find({'_id': new ObjectId(ID)}).toArray()
    result.message = result.data.length
    res.send(result) 
  
} 
catch (error) { console.log(error)}
}
//========================== Create Room ==================================================

exports.create = async (req,res)=>{
try{
    const newRoom = req.body
    let result = {status:"success"}
    result.data =  await  Flights.insertOne(newRoom)
    res.send(result) 
} 
catch (error) { console.log(error)}
}

//========================== Update Room ==================================================

exports.update = async (req,res)=>{
try{
    const ID = req.params.ID
    const UpdateRomm = req.body 
    let result = {status:"success"}
    result.data =  await  Flights.updateOne({'_id': new ObjectId(ID)},{$set:UpdateRomm},{upsert:true})
    res.send(result) 
} 
catch (error) { console.log(error)}
}

//========================== Delete Room ==================================================

exports.delete = async (req,res)=>{
try{
    const ID = req.params.ID
    console.log( ID)
    let result = {status:"success"}
    result.data =  await  Flights.deleteOne({'_id': new ObjectId(ID)})
    res.send(result) 
} 
catch (error) { console.log(error)}
}
