import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from 'react-bootstrap'
 
class ProductCard extends React.Component {
  render(){
    const { name, photoUrl, id } = this.props
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={photoUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link to={`/producto/${id}`}>Ver más</Link>
        </Card.Body>
      </Card>
    )
  }
}

export default ProductCard