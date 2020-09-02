import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {RoomConsumer} from '../Context'
import Loading from './loading'
export default function RoomsContainer() {
    return (
      <RoomConsumer>
          {
              (value)=>{
                  const {loading,sortedRooms,rooms}=value;
                  console.log(value.loading); 
                  if(loading){
                      return <Loading/>;
                  }
                return (
                <div>
                    Helo Room Container 
                    <RoomFilter rooms={rooms}></RoomFilter>
                    <RoomList rooms={sortedRooms}></RoomList>
                </div>
             )
              }
          }
      </RoomConsumer>
      
    )
}
