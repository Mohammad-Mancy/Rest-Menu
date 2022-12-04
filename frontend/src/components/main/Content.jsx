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

  const filterResult = async (CatId)=>{
        try {
          let res = await fetch('http://127.0.0.1:3001/api/category/item/get/byCategory',{
            method: 'POST',
            headers:{
              'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
              id:CatId
            })
          })
          const data = await res.json();
          if (res.status === 200 ) {
            setItems(data)
          }

        } catch (error) {
          console.error(error);
        }
    }

  const getAllItems = async (e) => {
    try {
      let res = await fetch('http://127.0.0.1:3001/api/category/item/get',{
        method: 'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })
      const data = await res.json();
      if (res.status === 200 ) {
        setItems(data)
      }
    } catch (error) {
      console.error(error);
    }
  }

    useEffect ( () => {
      getCategories()
      getAllItems()
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

        <div className='category' key={"all"} onClick={() => getAllItems()}>
              <img src={`http://localhost:3001/public/media/icon/all.png`} alt="Category Icon" className='category-img'/>
              <div className='cat-title'>All</div>
        </div>
        
        {category.map(({ _id,icon,title }) => (
          <div className='category' key={_id} onClick={()=>filterResult(_id)}>
              <img src={`http://localhost:3001/public/media/icon/${icon}`} alt="Category Icon" className='category-img'/>
              <div className='cat-title'>{title}</div>
          </div>
        ))}
        
      </ScrollMenu>


      {/* items list */}
      <div className='items-list'>
        {items.map(({_id,name,description,price,image}) => (
            <ItemCard
              id={_id}
              key={_id}
              itemName={name}
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