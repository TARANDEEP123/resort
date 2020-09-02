import React, { Component } from 'react'
import Title from './Title'
import {RoomContext} from '../Context'
import Loading from './loading'
import Room from './Room'

export default class Feature extends Component {
    static contextType = RoomContext
    render() {
        let {loading,featuredRooms:rooms} = this.context
        console.log(this.context);
        rooms  = rooms.map(room=>{
            return <Room key ={room.id} room={room}/>
        })
        return (
            <section className="featured-rooms">
   
            <Title title="Feature Rooms" className="featured rooms"></Title>
            <div className="featured-rooms-center">
                {loading?<Loading></Loading>:rooms}
            </div>
            

        

                
            </section>
        )
    }
}
