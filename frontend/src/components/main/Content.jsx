import React,{ useState, useEffect } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ItemCard from './ItemCard';

function Content() {

  // Mock server
  const category=[
    {id:1,
    icon:"https://via.placeholder.com/150",
    name:"Platters"},
    {id:2,
      icon:"https://via.placeholder.com/150",
      name:"Platters2"},
    {id:3,
      icon:"https://via.placeholder.com/150",
      name:"Platters4"},
    {id:4,
      icon:"https://via.placeholder.com/150",
      name:"Platters5"},
    {id:5,
      icon:"https://via.placeholder.com/150",
      name:"Platters6"},
    {id:6,
      icon:"https://via.placeholder.com/150",
      name:"Platters7"},
  ]
  // _______________________

  const [items,setItems] = useState([])

  const filterResult=(CatItem)=>{
      // Api get array of items for specfic category
      const newItems = [
        {
          id:1,
          itemName : 'Chicken Platter'+' '+CatItem,
          description : "4 chicken pieces with our special sauce served with bbq dip and wedges",
          price : 160000,
          image : "https://via.placeholder.com/150"
        },
        {
          id:1,
          itemName : 'Chicken Platter'+' '+CatItem,
          description : "4 chicken pieces with our special sauce served with bbq dip and wedges",
          price : 160000,
          image : "https://via.placeholder.com/150"
        },
        {
          id:1,
          itemName : 'Chicken Platter'+' '+CatItem,
          description : "4 chicken pieces with our special sauce served with bbq dip and wedges",
          price : 160000,
          image : "https://via.placeholder.com/150"
        },
        {
          id:1,
          itemName : 'Chicken Platter'+' '+CatItem,
          description : "4 chicken pieces with our special sauce served with bbq dip and wedges",
          price : 160000,
          image : "https://via.placeholder.com/150"
        },
        {
          id:1,
          itemName : 'Chicken Platter'+' '+CatItem,
          description : "4 chicken pieces with our special sauce served with bbq dip and wedges",
          price : 160000,
          image : "https://via.placeholder.com/150"
        }
      ]
      setItems(newItems)
    }

    useEffect ( () => {
      filterResult(1);
    },[]);

    // Loading for items 
    if (items.length === 0) {
      return(
        <div>
          loading...
        </div>
    )}

  return (
    <div>

      {/* Category bar */}
      <ScrollMenu scrollContainerClassName="bottom-nav">
        {category.map(({ id,icon,name }) => (
          <div className='category' key={id} onClick={()=>filterResult(id)}>
              <img src={icon} alt="Category Icon" />
              <div className='cat-title'>{name}</div>
          </div>
        ))}
      </ScrollMenu>


    {/* items list */}
    <div className='items-list'>
      {items.map(({id,itemName,description,price,image}) => (
          <ItemCard
            id={id}
            itemName={itemName}
            description={description}
            price={price}
            image={image}
          />
      ))}
    </div>
    
        
    </div>
  )
}

export default Content