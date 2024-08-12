import React from "react";
import { Header } from "../header/Header";
import { CardPizza } from "../cardpizza/cardpizza";
import './Home.css'

export function Home() {
  return (
    <div style={{height:'100%'}}>
      <Header />

      <div className="cards" >
        <CardPizza
          image="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          name="Napolitana"
          ingredients="mozzarella, tomates, jamón, orégano"
          price="5.990"
        />
        <CardPizza
          image="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
          name="Española"
          ingredients="mozzarella, gorgonzola, parmezano, provolone"
          price="6.990"
        />
        <CardPizza
          image="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
          name="Pepperoni"
          ingredients="mozzarella, pepperoni, orégano"
          price="6.990"
        />
      </div>
    </div>
  );
}
 