import React from "react";
import {
    Chart, Series, CommonSeriesSettings, Legend,Label,Format, ValueAxis, Title, Export, Tooltip,SeriesTemplate
  } from 'devextreme-react/chart';

export default function BarChart({data,height}){
    const multiPallete = ["#4496D2","#2F9189","#00D01D","#ECC463","#EC8863","#D6A2FF","#7656D2","#2B64E0"];
    return (
    <Chart
        id="chart"
        dataSource={data}
        palette={multiPallete}
        type="bar"
        title={{
            font:{
                size:14
            },
            horizontalAlignment:"left",
            text: '검사항목별 불합격 율 (%)'
        }}
        size={{
            height: height?height:250,
        }}
        valueAxis={{
            visible: false,
        }}
        legend={{
            visible: false,
        }}

      >
        <CommonSeriesSettings
          argumentField="label"
          valueField="val"
          type="bar"
          ignoreEmptyPoints={true}
          hoverMode="allArgumentPoints"
          selectionMode="allArgumentPoints"
        >
            <Label visible={true} backgroundColor={'transparent'}>
                <Format type="fixedPoint" precision={0} />
            </Label>
        </CommonSeriesSettings>
        <SeriesTemplate nameField="label" />
        {/* <Series argumentField="label">
        </Series> */}
        <Legend
            visible={false}
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="top"
        />        
      </Chart>
    )
}