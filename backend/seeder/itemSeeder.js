require('dotenv').config();

const mongoose = require('mongoose');
const Item = require('../model/Item');


mongoose.connect(process.env.DB_CONNECT,
    () =>{
        console.log('Connected Successfully');
        }
);

const seedItem = [
    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000001'),
        name:"Chicken Platter",
        description:"4 chicken pieces with our special sauce served with bbq dip and wedges",
        price: 160000,
        image:"https://via.placeholder.com/150"
    },{
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000002'),
        name:"Beef Platter",
        description:"4 beef pieces with our special sauce served with bbq dip and wedges",
        price:260000,
        image:"https://via.placeholder.com/150"
    },{
        name:"Beef and chicken Platter",
        description:"10 beef and chicken pieces with our special sauce served with bbq dip and wedges",
        price:360000,
        image:"https://via.placeholder.com/150"
    },
];

const seedDB = async () => {
    await Item.insertMany(seedItem);
    console.log('Items Imported')
}

seedDB().then(()=>{
    mongoose.connection.close();
})