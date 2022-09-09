import Card from "@mui/material/Card";
import React from "react";

// import { Button } from "devextreme-react/button";
// import RadioGroup from "devextreme-react/radio-group";
// import DataBox from "./DataBox";
// import { priorities } from "./RadioData.js";
import 'devextreme/dist/css/dx.light.css';
import CardData from "../Page2/CardData";

function CardPage2() {
  return (
    <Card
      style={{
        backgroundColor: "#13181d",
        width: 397,
        height: 307,
        margin: "10px",
         display: "flex",
        flexDirection: "column",
      }}
    >
    
      <CardData/>
    </Card>
  );
}

export default CardPage2;
