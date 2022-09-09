import React from 'react';


function ProgBar(props) {
  return (
    <div style={{display: 'flex',width: `${props.outer}`, height: `${props.height}`, backgroundColor: `${props.outerColor}`}}>
     
        <div style={{ width: `${props.inner}%`, textAlign: 'center', backgroundColor: `${props.innerColor}` }}>{props.time}.</div>
         <div style={{width: `${props.inner}%`, textAlign: 'center', backgroundColor: `${props.innerColor}` }}></div> 
        <div style={{width: `${props.inner1}%`, textAlign: 'center', backgroundColor: `${props.inner1Color}` }}></div>
        <div style={{width: `${props.inner2}%`, textAlign: 'center', backgroundColor: `${props.inner2Color}` }}></div>
        <div style={{width: `${props.inner3}%`, textAlign: 'center', backgroundColor: `${props.inner3Color}` }}></div>
        <div style={{width: `${props.inner4}%`, textAlign: 'center', backgroundColor: `${props.inner4Color}` }}></div>
     
        
    </div>
  )
}

export default ProgBar   