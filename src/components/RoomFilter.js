import React from 'react'
import {useContext} from 'react'
import {RoomContext, RoomConsumer} from '../Context'
import Title from '../components/Title'
const getUnique = (item,value)=>{
 return [...new Set(item.map(item=>item[value]))]   

}
export default function RoomFilter({rooms}) {
    const context=  useContext(RoomContext)
    const {
        handleChange,
        handleClick,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    }=context;
    let types = getUnique(rooms,'type');
    types = ['all',...types]
    types = types.map((item,index)=>{
    return <option value={item} key ={index}>{item}</option>
    })
    console.log(types);

    let peoples = getUnique(rooms,'capacity');
    peoples =peoples.map((item,index)=>{
    return <option key={index} value = {item}>{item}</option>
    });
    
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/* Select typr */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value = {type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value = {capacity} className="form-control" onChange={handleChange}>
                        {peoples}
                    </select>
                </div>
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control">

                    </input>

                </div>
                {/* end of room price */}
                {/* Size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value ={minSize} onChange={handleChange} className="size-input"></input>
                    <input type="number" name="maxSize" id="size" value ={maxSize} onChange={handleChange} className="size-input"></input>

                    </div>
                </div>
                {/* End of Size */}
                {/* checkbox extra */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}></input>
                    <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}></input>
                    <label htmlFor="pets">pets</label>
                    </div>

                </div>
                <div className="form-group">
                    <button className="btn-primary" type="submit" onClick={handleClick}>Reset</button>
                </div>


            </form>

        </section>
    )
}
