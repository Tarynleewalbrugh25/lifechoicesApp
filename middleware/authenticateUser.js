import { config } from 'dotenv';
config()
import { sign, verify } from 'jsonwebtoken';
function createToken(user) {
  return sign(
    {
      emailAdd: user.emailAdd,
      userPwd: user.Pass,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: '1h',
    }
    );
}
function verifyAToken(req, res, next) {
    // Retrieve a tokemn from the browser
    const token = req?.headers['Authorization']
    if (token) {
        if (verify(token, process.env.SECRET_KEY)) {
            next()
        } else {
            res?.json({
                status: res.statusCode,
                msg: 'Please provide your correct details'
            })
        }
    }
        else
        {
            res?.json({
                status: res.statusCode,
                msg: "Please login"
            })
        }
    }
export {
    createToken,
    verifyAToken
}


























































































// import {config} from 'dotenv';
// import { sign, verify } from 'jsonwebtoken';
// config()
// function createToken(user){
//     return sign({
//         emailAdd: user.emailAdd,
//         userPwd: user.userPwd
//     },
//     process.env.SECRET_KEY,
//     {
//         expiresIn: '1h'
//     }) 
// }
// function verifyToken(req, res, next){
//     //in order to verify a token you need to go to the browser -retrieve a token from the browser
//     const token = req?.headers['Authorization']
//     if(verify(token, process.env.SECRET_KEY)){
//         next()
//     }else {
//         res?.json({
//             status: res.statusCode,
//             msg: 'Please provide your correct details'
//         })
//     }else {
//         res?.json({
//             status: res.statusCode,
//             msg: 'Please login'
//         })
//     }
// }
// export {
//     createToken
// }