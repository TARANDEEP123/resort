import React from 'react'
import {Link} from "react-router-dom"
import PropType from 'prop-types'
import defaultImg from '../images/room-1.jpeg';
import Title from './Title';
export default function Room({room}) {
    const {name,slug,images,price} = room;
    return (
        
        <article className="room"> 
        <div className="img-container">
            <img src = {images[0]||defaultImg} alt = "Single Room "></img>
            <div className="price-top">
    <h6>${price}</h6>
    <p>per night</p>
            </div>
            <Link to={`rooms/${slug}`} className="btn btn-primary room-link">Feature</Link>
            
        </div>
    <p className="room-info">{name}</p>    

        </article>
    )
}
Room.propType={
    room:PropType.shape({
        name:PropType.string.isRequired,
        slug:PropType.string.isRequired,
        images:PropType.arrayOf(PropType.string).isRequired,
        price:PropType.number.isRequired
    })

}
