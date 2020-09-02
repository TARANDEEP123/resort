import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomContainer from '../components/RoomsContainer'
export default function rooms() {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Our Rooms"  ><Link to="/" className="btn-primary">Go Back Home</Link></Banner>

        </Hero>
        <RoomContainer></RoomContainer>
</>
        
    )
}
