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
        name:"Beef Burger Platter",
        description:"Two grilled beef  patties, tomato, grilled onions and ketchup served with fries and coleslaw",
        price: 270000,
        image:"platter1.jpg"
    },    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000002'),
        name:"Chicken Burger Platter",
        description:"Two grilled chicken breasts, garlic mayo, tomato, lettuce and pickles served with fries and coleslaw",
        price: 260000,
        image:"platter2.jpg"
    },    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000003'),
        name:"Special Burger Platter",
        description:"Two grilled beef burger patties, cheese, turkey, tomato, grilled onions and ketchup served with fries and coleslaw",
        price: 300000,
        image:"platter3.jpg"
    },    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000004'),
        name:"Fattouch",
        description:"Lemon, olive oil, vinegar & pomegranate molasses",
        price: 40000,
        image:"salad1.jpg"
    },    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000005'),
        name:"Coleslaw",
        description:"lemon,olive oil,salt,carrot & cabbage",
        price: 30000,
        image:"salad2.jpg"
    },    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000006'),
        name:"Tawouk",
        description:"Marinated chicken breast, fries, coleslaw, garlic, pickles and ketchup",
        price: 120000,
        image:"sandwich1.jpg"
    },    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000007'),
        name:"Soujouk",
        description:"fries,sausage, tomato, mayo and pickles",
        price: 140000,
        image:"sandwich2.jpg"
    },    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000008'),
        name:"Beef Burger",
        description:"Fries, coleslaw, fresh tomato, grilled onions and ketchup",
        price: 135000,
        image:"burger1.jpg"
    },    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000009'),
        name:"Chicken Burger",
        description:"Chicken breast, fries, lettuce, mayo, tomato, garlic and pickles",
        price: 120000,
        image:"burger2.jpg"
    },    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000010'),
        name:"French Fries Box large",
        description:"French Fries ",
        price: 60000,
        image:"boxAndDips1.jpg"
    },    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000011'),
        name:"Garlic small",
        description:"Garlic",
        price: 20000,
        image:"boxAndDips2.jpg"
    },    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000012'),
        name:"Pepsi Can",
        description:"Pepsi Can",
        price: 30000,
        image:"beverage1.jpg"
    },    {
        _id:mongoose.Types.ObjectId('4edd40c86762e0fb12000013'),
        name:"7up Can",
        description:"7up can",
        price: 30000,
        image:"beverage2.jpg"
    }
];

const seedDB = async () => {
    await Item.insertMany(seedItem);
    console.log('Items Imported')
}

seedDB().then(()=>{
    mongoose.connection.close();
})