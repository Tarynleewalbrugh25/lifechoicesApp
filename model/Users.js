import { Connection as db } from "../config/index.js"       //in this folder we will be creating our modules basically javascript
import {hash, compare} from 'bcrypt'                         //encrypts the password 
import {createToken} from "../middleware/AuthenticateUser.js"   //this is to authenticate the user
class Users{   
    fetchUsers(req, res) {           //function takes two arguments request and response 
        const qry = `                
        SELECT userID, firstName, lastName, userAge, gender, emailAdd, userPwd, userRole
        FROM Users;
        WHERE userID = ${req.params.id};  
        `                                     // params.id is the number you put at the end of your link to target iy or fetch it in the browsers
        db.query(qry, (err, result)=>{
            if(err) throw err               //this is if statement 
            res.json()({                    //else statement  
                status: res.statusCode,
                result                       //data that comes from database
            })
        })
    }
    async createUser(req, res) {
        //payload
        let data = req.body
        data.userPwd = await hash(data?.userPwd,10)
        let user ={
            emailAdd: data.emailAdd,
            userPwd: data.userPwd
        }
        const qry = `
        INSERT INTO Users
        SET ?;
        `
        db.query(qry,[data], (err)=>{
            if(err){
                res.json({
                    status: res.statusCode,
                    msg: 'Please use another email address'
                })
            }else {
                //create a token 
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    msg: 'You\re registered'
                })
            }
        })
    }
}
export {
    Users
}