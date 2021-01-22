import React from 'react'
import CardItem from './CardItem'
import "./Card.css"
import picture9 from "../Assets/images/img-9.jpg"
import picture2 from "../Assets/images/img-2.jpg"
import picture3 from "../Assets/images/img-3.jpg"
import picture4 from "../Assets/images/img-4.jpg"
import picture8 from "../Assets/images/img-8.jpg"

function Card() {
    return (
       <div className="cards">
            <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                     <ul className="cards__item">
                         <CardItem
                         src={picture9}
                         text="Explore the hidden waterfall deep inside the Amazon jungle"
                         label="Adventure"
                         path="/services"
                         ></CardItem>
                        <CardItem
                         src={picture2}
                         text="Travel through the Islands of Bali in a Private Cruise"
                         label="Luxury  "
                         path="/services"
                         ></CardItem>                        
                     </ul>
                     <ul className="cards__item">
                         <CardItem
                         src={picture3}
                         text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                         label="Mystery"
                         path="/services"
                         ></CardItem>
                        <CardItem
                         src={picture4}
                         text="Experience Football in Top of Himalayan Mountains "
                         label="Adventure  "
                         path="/products"
                         ></CardItem>  
                        <CardItem
                         src={picture8}
                         text="Ride through the Sahara Desert on a guide camel tour"
                         label="Adrenaline"
                         path="/sign-up"
                         ></CardItem>                       
                     </ul>
                </div>
            </div>
       </div>
    )
}

export default Card
