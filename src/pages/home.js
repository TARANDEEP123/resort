import React from 'react'
import Hero from '../components/Hero'

import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Service from '../components/Service'
import Feature from '../components/Feature'

export default function home() {
    return (
        <React.Fragment>
        <Hero >
            <Banner title="luxrious room" subtitle="delux room starting at 299" ><Link to="/rooms" className="btn-primary">Our Rooms</Link></Banner>
        </Hero>
        <Service></Service>
        <Feature></Feature>
        </React.Fragment>
    )
}
