require('dotenv').config();

const mongoose = require('mongoose');
const User = require('../model/User');


mongoose.connect(process.env.DB_CONNECT,
    () =>{
        console.log('Connected Successfully');
        }
);

const seedUser = [
    {
        name:"Admin_1",
        email:"admin_1@gmail.com",
        password:"password"
    },
    {
        name:"Admin_2",
        email:"admin_2@gmail.com",
        password:"password"
    },
];

const seedDB = async () => {
    await User.insertMany(seedUser);
    console.log('User Imported')
}

seedDB().then(()=>{
    mongoose.connection.close();
})