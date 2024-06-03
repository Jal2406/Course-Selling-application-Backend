const { Router } = require('express');
const { User, Course } = require('../db')
const userMiddelware = require('../middleware/usermid')
const router = Router();
const jwt = require("jsonwebtoken")
const jwtpass = "123456"

router.post('/signup', async (req,res) => {
    const pass = req.body.password;
    const user = jwt.sign(req.body.username, jwtpass);
    await User.create({
        username: user,
        password: pass
    })

    res.status(200).send("User Created")
})

router.get('/courses', async (req, res) => {
    const course = await Course.find({})
    res.send(course)
})

router.post('/course/:courseId', userMiddelware, async (req,res) => {
    const courseId = req.params.courseId;
    const username = jwt.sign(req.body.username, jwtpass);

    await User.updateOne({
        username: username
    }, {
        "$push":{
        purchasedCourse : courseId
        }
})
    res.send("purchased Success")
})

router.get('/purchasedcourse', userMiddelware, async (req,res) => {
    const user = await User.findOne({
        username: req.headers.username
    })
    console.log(user)
    const Courses = await Course.find({
        _id :{
            "$in" : user.purchasedCourse
        }
    })

    res.json({
        Courses : Courses
    })
})

module.exports = router;