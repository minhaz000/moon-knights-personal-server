const { ObjectId } = require('mongodb')
const DB = require('../../db.config')
const Rooms = DB.client.db(process.env.DATABASE_NAME||'test').collection('rooms')
//========================== GET Room ==================================================

exports.index = async (req,res)=>{
try{
    let result = {status:"success"}
    result.data =  await  Rooms.find({}).toArray()
    result.message = result.data.length
    result.data.map(item=> item.image=`${process.env.HOST}${item.image}`) 
    res.send(result) 
} 
catch (error) { console.log(error)}
}
//========================== GET  Room BY ID ==================================================

exports.getRoomByID = async (req,res)=>{
try{
    const ID = req.params.ID
    let result = {status:"success"}
    result.data =  await  Rooms.find({'_id': new ObjectId(ID)}).toArray()
    result.message = result.data.length
    result.data.map(item=> item.image=`${process.env.HOST}${item.image}`) 
    res.send(result) 
  
} 
catch (error) { console.log(error)}
}
//========================== Create Room ==================================================

exports.create = async (req,res)=>{
try{
    const newRoom = req.body
    let result = {status:"success"}
    result.data =  await  Rooms.insertOne(newRoom)
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
    result.data =  await  Rooms.updateOne({'_id': new ObjectId(ID)},{$set:UpdateRomm},{upsert:true})
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
    result.data =  await  Rooms.deleteOne({'_id': new ObjectId(ID)})
    res.send(result) 
} 
catch (error) { console.log(error)}
}
