require('dotenv').config();

const mongoose = require('mongoose');
const Category = require('../model/Category');


mongoose.connect(process.env.DB_CONNECT,
    () =>{
        console.log('Connected Successfully');
        }
);

const seedCat = [
    {
        title:"Platters",
        icon:"platters.jpg",
        items:[
            mongoose.Types.ObjectId('4edd40c86762e0fb12000001'),
            mongoose.Types.ObjectId('4edd40c86762e0fb12000002')
        ]
    },
    {
        title:"Salads",
        icon:"Salads.jpg"
    },
];

const seedDB = async () => {
    await Category.insertMany(seedCat);
    console.log('Category Imported')
}

seedDB().then(()=>{
    mongoose.connection.close();
})