import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



export const CardPizza = (props) => {
  return (
    <Card style={{ width: '20rem', margin:'2rem'}}>
      <Card.Img variant="top" src={props.image}/>
      <Card.Body>
        <Card.Title style={{paddingBottom:'1rem'}} >Pizza {props.name} </Card.Title>
        <hr style={{ border: '1px solid gray' }}/>
        <Card.Text>
         <p style={{textAlign:'center', fontWeight:'lighter', paddingTop:'0.5rem'}}>Ingredientes: </p> 
         <p style={{textAlign:'center',fontSize:'0.8rem' }}>&#x1f355; {props.ingredients}</p>
    
        </Card.Text>
        <hr style={{ border: '1px solid gray' }} />
      </Card.Body>
      <div style={{ textAlign:'center', fontSize:'1.5rem', fontWeight:'bold'}}>
        <p>Precio: ${props.price} </p>    
      </div>
      
      <Card.Body style={{ display:'flex',justifyContent:'space-around'}}>
      <Button variant="secondary" style={{height:'3rem', backgroundColor:'white', color:'black'}} >Ver mas &#x1F440;</Button>
      <Button variant="dark" style={{height:'3rem'}} >Añadir &#x1F6D2;</Button>
      </Card.Body>
    </Card>
    
  )
}
