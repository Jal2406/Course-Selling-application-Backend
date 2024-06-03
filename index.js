const express = require('express');
// const mongoose = require('mongoose')
const adminRoute = require('./routes/admin')
const userRoute = require('./routes/user')
const app = express();
// export jwtpass = "123456";

app.use(express.json())
app.use('/admin',adminRoute)
app.use('/user',userRoute)



app.listen(3000);