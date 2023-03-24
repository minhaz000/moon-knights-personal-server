const { ObjectId } = require('mongodb')
const DB = require('../../db.config')
const JWT = require('jsonwebtoken')
const Users = DB.client.db(process.env.DATABASE_NAME||'test').collection('users')

exports.index = async(req,res)=>{
try {

 const  result  = await Users.find({}).toArray()
res.send(result)

} 
catch (error) { console.log(error)}
}
// GET or MAKE TOKEN   
exports.getToken= async(req,res)=>{
try {
  const user=req.body.user
  user.role = 'user'
  await Users.updateOne({email:user.email},{$set:user},{upsert:true})
  const token = JWT.sign(user,process.env.TOKEN_SECRET)
 
res.send({token})

} 
catch (error) { console.log(error)}
}