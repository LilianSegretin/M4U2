import React from "react";
import Card from './Card';


// import hamb from "public/img/home/hamb.jpg";
// import empanadas from 'public/img/home/empanadas.jpg';
// import pizza from '.../img/home/pizza.jpg';

import hamb from "../assets/home/hamb.jpg";
import empanadas from '../assets/home/empanadas.jpg'
import pizza from '../assets/home/pizza.jpg'
import ensaladas from '../assets/home/ensaladas.jpg'
import tartas from "../assets/home/tartas.jpg";
import sandwmila from '../assets/home/sandwmila.jpg'
import sandwjyq from '../assets/home/sandwjyq.jpg'
import jnaranj from '../assets/home/jnaranj.jpg'
import botgaseosa from '../assets/home/botgaseosa.jpg'

const cards = [
  {
    id: 1,
    title: "Hamburguesa",
    image: hamb,
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Empanadas",
    image: empanadas,
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Pizza",
    image: pizza,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 4,
    title: "Ensaladas",
    image: ensaladas,
    url: "https://faztweb.com",
  },
  {
    id: 5,
    title: "tartas",
    image: tartas,
    url: "https://blog.faztweb.com",
  },
  {
    id: 6,
    title: "Sandwich Milanesa",
    image: sandwmila,
    url: "https://youtube.com/fazttech",
  },
  {
  id: 7,
  title: "Sandwich Jamon y queso",
  image: sandwjyq,
  url: "https://faztweb.com",
},
{
  id: 8,
  title: "Jugo De Naranja",
  image: jnaranj,
  url: "https://blog.faztweb.com",
},
{
  id: 9,
  title: "Bebidas",
  image: botgaseosa,
  url: "https://youtube.com/fazttech",
},
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;