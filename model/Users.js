import { Connection as db } from "../config/index.js"       //in this folder we will be creating our modules basically javascript
import {hash, compare} from 'bcrypt'                         //encrypts the password 
import {createToken} from "../middleware/authenticateUser.js"   //this is to authenticate the user
class Users{   
    fetchUsers(req, res) {           //function takes two arguments request and response 
        const qry = `                
        SELECT userID, firstName, lastName, userAge, gender, emailAdd, userPwd, userRole
        FROM User;  
        `                                     // params.id is the number you put at the end of your link to target iy or fetch it in the browsers
        db.query(qry, (err, results)=>{
            if(err) throw err               //this is if statement 
            res.json({                    //else statement  
                status: res.statusCode,
                results                       //data that comes from database
            })
        })
    }
    fetchUser(req, res) {           //function takes two arguments request and response 
        const qry = `                
        SELECT userID, firstName, lastName, userAge, gender, emailAdd, userPwd, userRole
        FROM User
        WHERE userID = ${req.params.id};  
        `                                     // params.id is the number you put at the end of your link to target iy or fetch it in the browsers
        db.query(qry, (err, result)=>{
            if(err) throw err               //this is if statement 
            res.json({                    //else statement  
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
        INSERT INTO User
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
    
    deleteUser(req, res) {
        const prodID = req.params.id;
        if (!prodID) {
            return res.status(400).json({ msg: 'User ID is required' });
        }
        const qry = `
            DELETE FROM Users
            WHERE userID = ?;
        `;
        db.query(qry, [prodID], (err) => {
            if (err) {
                console.error('Error deleting User:', err);
                return res.status(500).json({ msg: 'Failed to delete User' });
            }
            res.json({
                status: res.statusCode,
                msg: 'User deleted'
            });
        });
    }
    login(req, res) {
        const { emailAdd, userPwd } = req.body;
        const qry = `
            SELECT userID, firstName, lastName, userAge, gender, emailAdd, userPwd, userRole
            FROM User
            WHERE emailAdd = '${emailAdd}';
            `;
        db.query(qry, async (err, result) => {
            if (err) throw err;
            if (!result?.length) {
                res.json({
                    status: res.statusCode,
                    msg: 'wrong email address'
                });
            } else {
                //kdwcnjvfn
                //validate password
                const validPass = await compare(userPwd, result[0].userPwd);
                if (validPass) {
                    const token = createToken({
                        emailAdd,
                        userPwd
                    });
                    res.json({
                        status: res.statusCode,
                        msg: 'you are logged in',
                        token,
                        result: result[0]
                    });
                } else {
                    res.json({
                        status: res.statusCode,
                        msg: 'Please provide the correct password.'
                    });
                }
            }
        });
    }
    
    updateUser(req, res) {
        const qry = `
            UPDATE Users
            SET ?
            WHERE userID = ?;
        `;
        const { prodID } = req.body;
        db.query(qry, [req.body, prodID], (err) => {
            if (err) {
                console.error('Error updating:', err);
                return res.status(500).json({ msg: 'Failed to update User' });
            }
            res.json({
                status: res.statusCode,
                msg: 'User  updated'
            });
        });
    }
}
export {
    Users
}