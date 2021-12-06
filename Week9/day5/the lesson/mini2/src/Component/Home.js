import { render } from '@testing-library/react'
import React,{Component} from 'react'
import { useState,useEffect } from "react"
export const  Home=(props)=>{
    const im = 'https://store-images.s-microsoft.com/image/apps.10595.14397430983184912.cfdf6f70-0a34-4999-b494-936559d822c3.7355576f-baf9-4be3-8b34-27bdc6ac1bd2?mode=scale&q=90&h=200&w=200&background=%230078D7'
    const [info,setInfo]=useState([]);
    const [text , setText]=useState('')
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>res.json())
        .then(data=>{setInfo(data)})
        
    },[])
    console.log(info)
    
        
 
    return (
        
        <div id='contain'>
            <input onChange={(e)=>{setText(e.target.value)}} type='text' placeholder='Search'/>
            {/* <div>
                <div id='one'>
                    <img src={im}/>
                    <p>tel aviv</p><br/>
                    <p>36</p>
                </div>
                <button id='btn' onClick={props.handleClick}>Add To Favorit</button>
            </div> */}
            {/* <p id='h1'>{JSON.stringify(info)}</p> */}
            {/* {

                info.map((item,i)=>{
                    return(
                        <div key={i} id='day'>
                        <div id='a'>
                        <span></span>
                         <p>38</p>
                        </div>
                        </div>
                      )
                })
            }
             */}

        </div>
    )
}