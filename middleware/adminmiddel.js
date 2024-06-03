const { request } = require('express')
const { Admin } = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const jwtpass = "123456"

const adminmiddel = async (req,res,next) => {
    const token = req.headers.authorization;
    const isUser = jwt.verify(token,jwtpass)
    if (isUser) {
        const password = await req.headers.password;
        const user = await Admin.findOne({
            username: token
        })
        const isMatch = bcrypt.compareSync(password, user.password)
        // console.log(username + password)
        if (isMatch) {
            next();
        }
        else{
          res.status(401).send("Invalid Creds")
        }
    }
}

module.exports = adminmiddel