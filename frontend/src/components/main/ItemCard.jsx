import React from 'react'
import Card from 'react-bootstrap/Card';

function ItemCard({id,itemName,description,price,image}) {
  return (
      <Card style={{ width: '22rem' }}>
        
        <Card.Img variant="top" src={`http://localhost:3001/public/media/images/${image}`} className="image-item-card"/>

        <Card.Body>

          <Card.Title>{itemName}</Card.Title>
          
          <Card.Text>
            {description}
          </Card.Text>

        </Card.Body>
        
        <Card.Footer>
          <small><strong>{price} L.L</strong></small>
        </Card.Footer>

      </Card>
  )
}

export default ItemCard