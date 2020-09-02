import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledComponent from '../components/styledHero'
export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
            
        }      

    }
    
    // componentDidMount(){
    // }
    static contextType = RoomContext; 
    render() {
        const {getRoom}  = this.context
        const room  = getRoom(this.state.slug)
        
        if(!room){
            console.log("Dewwde")
           return <div  className="error">
                
                <h1>No Such Room</h1>
                <Link to="/rooms" className='btn-primary' >
                    Back TO ROOM
                </Link>

            </div>
           
        }else{
            const {name,images,description,price,size,capacity,breakfast,pets,extras} = room
        return ( 
           <> 
            <StyledComponent img = {images[0]||this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        Back TO Room</Link> 
                </Banner>
            </StyledComponent>
            <section className="single-room">
                <div className='single-room-images'>
                {images.map((item,index)=>{
                   return  <img key = {index} src={item} alt={name}></img>
                })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
            <p>{description}</p>
                    </article>
                    <article className = 'info'>
                        <h3>info</h3>
                        <h6>price:${price}</h6>
                        <h6>size:{size} sqft</h6>
                        <h6>
                            max capacity:{
                                capacity>1 ? `${capacity} people`:
                                `${capacity} person`
                            }
                        </h6>
                        <h6>{pets?"pets allowed":"no pets allowed"}</h6>
                        <h6>{breakfast &&"free breakfast included"}</h6>
                    </article>
                </div>
                

            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item,index)=>{
                        return <li key={index}>-{item}</li>

                    })}
                </ul>
            </section>
            </>
        )
        }
    }
}
