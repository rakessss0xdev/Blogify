const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Secretkey = "Rakesh"

// hashing the password

const hashedPassword = async(password) => {
    try{        
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash( password, 10)
        console.log('password:', hash)
        return hash;
    } catch(err){
        console.log('Error Hashing Passoword:', err);
        throw err;
    }
};

//  Compare the password

const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

// Generate the Jwt
const generateToken = (userId) => {
    return jwt.sign({id: userId}, Secretkey,{expiresIn : '1h'});
};

// Function to verify the jWT

const verifyToken = (token) => {
    try {
        return jwt.verify(token, Secretkey);
    } catch {
        throw new Error('Invald Token');
    }
}

module.exports = {
    hashedPassword,
    comparePassword,
    generateToken,
    verifyToken
}