const { User } = require('../db')
const jwt = require("jsonwebtoken")
const jwtpass = "123456"

const usermid = async (req,res,next) => {
    const username = jwt.sign(req.body.username, jwtpass)
    const password = req.headers.password;
    const isUser = jwt.verify(username,jwtpass)
    if (isUser) {
        const exist = await User.findOne({
            username : username,
            password : password
        })
        if(exist) {
            next();
        }
        else{
            res.status(403).send("Invalid Creds")
        }
    }
}
module.exports = usermid;