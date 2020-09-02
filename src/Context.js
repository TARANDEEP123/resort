import React, { Component } from 'react'
import items from './data'
import Client from './contentful'
import rooms from './pages/rooms';

const RoomContext = React.createContext();
// It has 2 thing after making context provider and consumer provider allows to access all the component which are under it
 class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:false,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
         
         

    };
    getData= async ()=>{
        try{
            let response = await Client.getEntries({
                content_type:"beachApi",
                order:"-fields.price"
            });
            let rooms =  await this.formatData(response.items)
            console.log(rooms);

        let featuredRooms =   rooms.filter(room=>room.featured===true);
        let maxPrice = Math.max(...rooms.map(item=>item.price));
        let maxSize = Math.max(...rooms.map(item=>item.size));

        console.log(featuredRooms);
        this.setState({
            rooms,featuredRooms,sortedRooms:rooms,loading:false,maxPrice,maxSize
        })
            
        }catch(error){
            console.log(error)
        }
    } 
    async componentDidMount(){
        this.getData()




//Setting of local data without api

        // let rooms =  await this.formatData(items)
        // console.log(rooms);

        // let featuredRooms =   rooms.filter(room=>room.featured===true);
        // let maxPrice = Math.max(...rooms.map(item=>item.price));
        // let maxSize = Math.max(...rooms.map(item=>item.size));

        // console.log(featuredRooms);
        // this.setState({
        //     rooms,featuredRooms,sortedRooms:rooms,loading:false,maxPrice,maxSize
        // })

    }
    formatData(items){
        let tempItems = items.map(item=>{
            let id = item.sys.id
            let images = item.fields.images.map(image=>image.fields.file.url)
            let room ={...item.fields,images,id};
            //console.log(room);

            return room;
        })
        return tempItems;
    }
    getRoom  = (slug)=>{
        // FInd Single room with SLug
        let tempRooms = [...this.state.rooms];
        const room  = tempRooms.find((room)=>room.slug === slug)
        return room
        
    }
    handleChange=(event)=>{
        const target = event.target
        const value = target.type=='checkbox'?target.checked:target.value

        const name = event.target.name
        this.setState({
            [name]:value
        },this.filterRooms)
    }
    handleClick=(event)=>{
        event.preventDefault();
        const target = event.target
        const rooms = this.state.rooms
        this.setState({
        type:"all",
        sortedRooms:rooms,
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
        },this.componentDidMount)
    }
    filterRooms = ()=>{
        let {
            rooms,type,capacity,price,minSize,maxSize,breakfast,pets
        }=this.state;
        let tempRooms = [...rooms];
        capacity = parseInt(capacity)
        if(type !== 'all'){
           tempRooms = tempRooms.filter(room=>{
                return room.type===type
            })
        }
        if(capacity!== 1){
            tempRooms  = tempRooms.filter(room=>{
                return room.capacity>=capacity
            })
        }
        //Price Filter
        price= parseInt(price)
        if(price){
            tempRooms  = tempRooms.filter(room=>{
                return room.price<=price
            })

        }
        //Filter By Size
        tempRooms  = tempRooms.filter(room=>{
            return room.size>=minSize&&room.size<=maxSize
        })
        // fiter by brekfast
        
        tempRooms  = tempRooms.filter(room=>{
            return room.breakfast===true
        })
    
        // filter by pets
        tempRooms  = tempRooms.filter(room=>{
            return room.pets===true
        })

    this.setState({
            sortedRooms:tempRooms
        })
    }












    render() {
        return (
            <RoomContext.Provider value = {{...this.state,getRoom:this.getRoom,handleChange:this.handleChange,handleClick:this.handleClick}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer = RoomContext.Consumer;
export {RoomProvider,RoomConsumer,RoomContext}