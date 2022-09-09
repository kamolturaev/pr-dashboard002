import Card from "@mui/material/Card";
import React from "react";
import Slide1 from "./Slide";




function Card31() {
  return (
    <Card
      style={{
        backgroundColor: "#13181d",
        width: 397,
        height: 307,
        margin: "10px",
        
        flexDirection: "column",
      }}
    >
      <div
        style={{
          justifyContent: "space-between",
        
          alignItems: "center",
          margin: 14,
          textSizeAdjust: 16,
        }}
      >
     <Slide1/>
      </div>
    </Card>
  );
}

export default Card31;
