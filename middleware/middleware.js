const JWT = require('jsonwebtoken')
const DB = require('../db.config')
const Users = DB.client.db(process.env.DATABASE_NAME||'test').collection('users')
exports.verfyAdmin = async(req,res,next)=>{
  
  const token =  req.headers.authorization?.split(' ')[1]
  if(!req.headers.authorization){ res.status(403).send({ message:" this route is protected "}) }
  else{ 
        let currentUser = {}
        JWT.verify(token,process.env.TOKEN_SECRET,(err,decoded)=>{
          if(err){ res.status(401).send({message:"invalid  Token"})}
          currentUser = decoded
          })
        const isUser = await Users.findOne({email:currentUser.email})
        if(isUser.role==='admin') { req.role= 'admin' ; next()  } 
        else{ 
          res.status(403).send('you are not admin  ')
        }
}

}
