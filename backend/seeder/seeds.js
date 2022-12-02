require('dotenv').config();

const mongoose = require('mongoose');
const User = require('../model/User');


mongoose.connect(process.env.DB_CONNECT,
    () =>{
        console.log('Connected Successfully');
        }
);

// bcrypt(password) => $2a$12$/rkjjk..I3UsgYpJgPp8duLrzdGDnDGLb7J.z14aUdRLDKKExAHkW

const seedUser = [
    {
        name:"Admin_1",
        email:"admin_1@gmail.com",
        password:"$2a$12$/rkjjk..I3UsgYpJgPp8duLrzdGDnDGLb7J.z14aUdRLDKKExAHkW"
    },
    {
        name:"Admin_2",
        email:"admin_2@gmail.com",
        password:"$2a$12$/rkjjk..I3UsgYpJgPp8duLrzdGDnDGLb7J.z14aUdRLDKKExAHkW"
    },
];

const seedDB = async () => {
    await User.insertMany(seedUser);
    console.log('User Imported')
}

seedDB().then(()=>{
    mongoose.connection.close();
})