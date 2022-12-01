import React from 'react'
import Card from 'react-bootstrap/Card';

function ItemCard({id,itemName,description,price,image}) {
  return (
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={image} />
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