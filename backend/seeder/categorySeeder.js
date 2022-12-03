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
        icon:"platters.png",
        items:[
            mongoose.Types.ObjectId('4edd40c86762e0fb12000001'),
            mongoose.Types.ObjectId('4edd40c86762e0fb12000002'),
            mongoose.Types.ObjectId('4edd40c86762e0fb12000003')
        ]
    },
    {
        title:"Salad",
        icon:"salad.png",
        items:[
            mongoose.Types.ObjectId('4edd40c86762e0fb12000004'),
            mongoose.Types.ObjectId('4edd40c86762e0fb12000005')
        ]
    },
    {
        title:"Sandwich",
        icon:"sandwich.png",
        items:[
            mongoose.Types.ObjectId('4edd40c86762e0fb12000006'),
            mongoose.Types.ObjectId('4edd40c86762e0fb12000007')
        ]
    },
    {
        title:"Burger",
        icon:"burger.png",
        items:[
            mongoose.Types.ObjectId('4edd40c86762e0fb12000008'),
            mongoose.Types.ObjectId('4edd40c86762e0fb12000009')
        ]
    },
    {
        title:"Box and Dips",
        icon:"boxAndDips.png",
        items:[
            mongoose.Types.ObjectId('4edd40c86762e0fb12000010'),
            mongoose.Types.ObjectId('4edd40c86762e0fb12000011')
        ]
    },
    {
        title:"Beverage",
        icon:"beverage.png",
        items:[
            mongoose.Types.ObjectId('4edd40c86762e0fb12000012'),
            mongoose.Types.ObjectId('4edd40c86762e0fb12000013')
        ]
    },
];

const seedDB = async () => {
    await Category.insertMany(seedCat);
    console.log('Category Imported')
}

seedDB().then(()=>{
    mongoose.connection.close();
})