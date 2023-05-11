import React, { useState, useEffect } from "react"
import './style.scss'

import axios from "axios"

export default function Main({index}){

    const [data, setData] = useState({
        title: "",
        name: "",
        location: "",
        image: "",
    })

    useEffect(() => {
        getData()
    })

    async function getData(){
        await axios.get('./data.json').then(response => {
            setData({
                title: response.data.travel_experiences[index].trip_title,
                name: response.data.travel_experiences[index].place_name,
                location: response.data.travel_experiences[index].location,
                image: response.data.travel_experiences[index].image,
            })
        })
    }

    return(
        <div className="Main">
            <img src={data.image}/>

            <div className="containerInfo">
                <div className="border"/>
                <p className="title">{data.title}</p>

                <div className="location">
                    <p className="name">{data.name} - {data.location}</p>
                </div>
            </div>

            <div className="background"/>
        </div> 
    )
}