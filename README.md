# Backend for a Course Selling Application
This repository contains the backend application for a course selling platform, developed using Node.js, Express, and MongoDB. This application provides APIs for managing courses, users, and purchases.

## API Endpoints
### Auth
* `POST` /admin/signup
  -For Admin Registrarion
* `POST` /admin/signin
  -For Admin Login
* `POST` /user/signin
  -For User Registration
* `POST` /user/signin
  -For User Login

### Courses
* `POST` /admin/course
  - This Endpoint will let you hit to create a course with Title, Description, Price and Stating date
* `Get` /admin/course
  -This API endpoint will retrive all the courses available on the Database
* `GET` /user/course
  -This API Endpoint will let the user to retrive all the course which are in ready to teach
* `POST` /course/:courseId
  -This Particular endpoint will let the user buy course based on the courseId (More Authetication Needed)
* `GET` /user/purchasedcourse
  -To Retrive all the course that user have purchased

## Description
There are mainly two routes User and Admin. Admin will have certain creds to register himself for admin access.
In perticular for input validation I have used ZOD and to storing username jsonwebtokes are in use. also for Password hashing using a bcrypt library.
