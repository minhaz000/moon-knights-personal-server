const { ObjectId } = require('mongodb')
const DB = require('../../db.config')
const Categories = DB.client.db(process.env.DATABASE_NAME||'test').collection('flights-categories')
const Flights = DB.client.db(process.env.DATABASE_NAME||'test').collection('flights')
//========================== GET Categories ==================================================
exports.index = async (req,res)=>{
try{
    let result = {status:"success"}
    result.data =  await  Categories.find({}).toArray()
    result.message = result.data.length
    res.send(result) 
} 
catch (error) { console.log(error)}


}
//========================== GET Flights useing Category ==================================================
exports.getFlightsByCategory = async (req,res)=>{
try{
    const ID = req.params.ID
    let result = {status:"success"}
    const category =  await  Categories.find({'_id': new ObjectId(ID) }).toArray()
    result.data = await Flights.find({category:category[0].name}).toArray()
    result.message = result.data.length
    res.send(result) 
} 
catch (error) { console.log(error)}

}
//========================== Create  Categories ==================================================
exports.create = async (req,res)=>{
  try{
      const newCategory = req.body
      let result = {status:"success"}
      result.data =  await  Categories.insertOne(newCategory)
      result.message = result.data.length
      res.send(result) 
  } 
  catch (error) { console.log(error)}
  
}
//========================== Update Categories ==================================================
exports.update = async (req,res)=>{
  try{
      const ID = req.params.ID
      const UpdatedCategory = req.body
      let result = {status:"success"}
      result.data =  await  Categories.updateOne({'_id': new ObjectId(ID)},{$set:UpdatedCategory}, {upsert:true})
      res.send(result) 
  } 
  catch (error) { console.log(error)}
  
}//========================== Delete  Categories ==================================================
exports.delete = async (req,res)=>{
  try{
      const ID = req.params.ID
      let result = {status:"success"}
      result.data =  await  Categories.deleteOne({'_id': new ObjectId(ID)})
      res.send(result) 
  } 
  catch (error) { console.log(error)}
  
}
