const express = require('express')
const { Admin, Course } = require('../db')
const adminMiddleware = require('../middleware/adminmiddel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router();
const jwtpass = "123456"


router.post('/signup',async (req,res) => {
    const secPass = await bcrypt.hash(await req.body.password, 10)
    const user = jwt.sign(req.body.username, jwtpass);
    // console.log(user)
    // const pass = req.body.password;

    await Admin.create({
        username: user,
        password: secPass
    })

    res.status(200).send("Admin Created")

})

router.post('/course', adminMiddleware, async (req,res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    console.log(title)
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.status(200).send(`Course Created and ID of Course is ${newCourse._id}`)

})

router.get('/course', adminMiddleware, async (req,res) => {
    let response = await Course.find({})
    res.status(200).send(response)
})

module.exports = router;