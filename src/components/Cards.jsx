import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cardsdata from './CardsData';
import {ADD} from ".././redux/actions/action"
import { useDispatch } from 'react-redux';
import "./style.css";


const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  // console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
      // console.log(e);   
      dispatch(ADD(e));
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>

      <div className="row d-flex justify-content-center align-item-center">
        {
          data.map((element, id) => {
            return (
                <Card key={id} border="primary" style={{ width: '18rem', border: "none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{ height: "13rem" }} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text> price : ₹{element.price} </Card.Text>

                    <div className="button_div">
                      <Button variant="primary" 
                      onClick={()=>send(element)}
                      className="col-lg-12"
                      >Add to cart</Button>
                    </div>
                  </Card.Body>
                </Card>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards