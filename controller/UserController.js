import express from 'express'
import bodyParser from 'body-parser'
import { Users} from '../model/Users.js'
import { verifyAToken } from '../middleware/AuthenticateUser.js' 
const userRouter = express.Router()
//fetch users
userRouter.get('/', (req, res)=>{
    try{
        Users.fetchUsers(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve user'
        })
    }
    })
//fetch user
userRouter.get('/:id', (req, res)=>{
    try{
        Users.fetchUsers(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a user'
        })
    }
})

//add a user
userRouter.post('/register',bodyParser.json(),(req, res)=>{
    try{
        Users.createUser(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'failed to create'
        })
    }
})
export{
    userRouter, express
}