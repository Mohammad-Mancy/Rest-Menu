import React,{ useState, useEffect } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ItemCard from './ItemCard';

function Content() {

  const [items,setItems] = useState([])
  const [category,setCategory] = useState([])

  const getCategories = async (e) => {
    try {
      let res = await fetch('http://127.0.0.1:3001/api/category/get',{
        method: 'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })
      const data = await res.json();
      if (res.status === 200 ) {
        setCategory(data)
      }

    } catch (error) {
      console.error(error);
    }
  }

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
      getCategories()
      filterResult(1);
    },[]);

    // Loading for items 
    if (items.length === 0 || category.length === 0) {
      return(
        <div>
          loading...
        </div>
    )}

  return (
    <div>

      {/* Category bar */}
      <ScrollMenu scrollContainerClassName="bottom-nav">
        {category.map(({ id,icon,title }) => (
          <div className='category' key={id} onClick={()=>filterResult(id)}>
              <img src={`http://localhost:3001/public/media/icon/${icon}`} alt="Category Icon" className='category-img'/>
              <div className='cat-title'>{title}</div>
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