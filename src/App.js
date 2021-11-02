import React from 'react'
import { useEffect, useRef, useState } from 'react'
import './App.css'


const App = () => {
  const hh = useRef()
  const [idx, setIdx] = useState(0)
  const [isHide,  setIsHide] = useState(true)
  const [tic, setTic] = useState(true)


  useEffect(() => {
    if(idx < 7){
      setTimeout(() => {
        hh.current.children[idx].className = "fade"
        setIdx(idx + 1)
      }, 500)
    }else {
      setTimeout(() => {
        if(tic)setTic(false)
        else setTic(true)
        setIsHide(false)
      }, 800)
    }
  }, [idx, tic])

  return (
    <div className="container">
      <div className="title" >
        <h1 ref={hh}>
          <span>4</span>
          <span>s</span>
          <span>t</span>
          <span>&nbsp;</span>
          <span>M</span>
          <span>a</span>
          <span>n</span>
        </h1>
      </div>
      <div className="press">{tic ? null : "Press the Start Button"}</div>
      <button className={isHide ? null : "start"}>Start</button>
    </div>
  )
}

export default App
