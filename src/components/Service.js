import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Service extends Component {
    state={
        services:[{
            icon:<FaCocktail/>,
            title:"Free Cocktail",
            info:"Lorem Ipsum"


        },
        {
            icon:<FaHiking/>,
            title:"Free Hiking",
            info:"Lorem Ipsum"


        },
        {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info:"Lorem Ipsum"


        },{
            icon:<FaBeer/>,
            title:"Free Beer",
            info:"Lorem Ipsum"


        }]
    }
    render() {
        return (
            <section className="services">
                <Title title="Our Services"></Title>
                <div></div>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>

                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>

                    })}
                    </div>                
            
            </section>
        )
    }
}
