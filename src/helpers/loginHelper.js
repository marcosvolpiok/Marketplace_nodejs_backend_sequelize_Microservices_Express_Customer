const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const verifyPassword = async (customer, req)=>{
    const result = await bcrypt.compare(req.body.password, customer.password);
    if(result){
        return getToken(customer);
    }else{
        //else return {status: 401, data: 'Authentication failed'}
        //res.status(401).send({message : "Authentication failed ..."})
        return {status: 'LOGIN_WRONG', message: 'Password or mail wrong'};
    }
}


const getToken = (user) =>{
    const token = jwt.sign({ mail: user.mail, userId : user.id,},
        process.env.JWT_KEY, { expiresIn:"5256000h"})

        //return {status: 200, message: 'Auth successful', user, token: token}
        
    return {
        message : "Auth successful",
        user: user,
        token : token
    };
    
}


module.exports = {verifyPassword, getToken};