import React from 'react'
import { useState } from 'react'
import './Main.css'

const Main = () => {
  let [data,setdata]=useState("")
  

const changeh=(event)=>{
        let too=event.target.value
        setdata(too)
}
 const thisss=`https://source.unsplash.com/random/?${data}`

  return (
    <div>
 <div className="contaner">
  <div className="frist">
    <input value={data} placeholder="search Anything...." onChange={changeh} type="text" />
    <div className="mai">

<img src={thisss} alt="" />

    </div>
  </div>
 </div>
    </div>
  )
}

export default Main
