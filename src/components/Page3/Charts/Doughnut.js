import React, { useEffect,useState } from 'react';

import PieChart, {
    AdaptiveLayout,
    Legend,
    Series,
    Size,
    Tooltip,
    Format,
    Label,
    Connector,
    Export,
} from 'devextreme-react/pie-chart';
import _ from 'lodash';
import { Box } from '@mui/system';
import {handleColor} from '../../utils/classUtil';

export default function Doughnut({
        data,
        height,
        width,
        type = 'single',
        color,
        palette,
        showInnerLabel=false,
        useCustomLabel=true
    }) {
    // let totalPlanned = _.sumBy(data, function(o) { return o.n; }); 
    console.log(data)

    const low = 60;
    const high = 90;
    const singlePallete = [handleColor(data,low,high),"#5A6168"];
    const multiPallete = palette?palette:["#4496D2","#2F9189","#00D01D","#ECC463","#EC8863","#D6A2FF","#7656D2","#2B64E0"];
    const [drawData, setDrawData] = useState(null);
    
    useEffect(() => {
        if(type === 'single'){
            setDrawData([
                {
                    label: "active",
                    val: data,
                },
                {
                    label: "non-active",
                    val: 100 - data,
                },
            
            ])
        }else{
            setDrawData(data)
        }
    } , [data])

    const formatNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
    }).format;

    const CenterTemplate= (pieChart)=> {
        var points = pieChart
        .getAllSeries()[0]
        .getVisiblePoints();
        var value = 0;
        if(points.length > 0 && data.length >0){
            value = _.maxBy(points,(item)=>{return item.originalValue}).originalValue;
        }
        
        var color = handleColor(value,low,high);
        if(type === "multi"){
            // value = _.maxBy(data,(item)=>{return item.val}).val;
            color = "#fff"
        }
        
        return (
            <React.Fragment>
            <text fill={color } fontSize={24}>
                <tspan>
                    {value}
                </tspan>
            </text>
            </React.Fragment>
        )
    }
    
    return (
        <React.Fragment>
        <Box >
            <PieChart
                id="pie"
                type="doughnut"
                palette={type === 'single' ? singlePallete : multiPallete}
                dataSource={drawData}
                startAngle={90}
                size={
                    {
                        height: height,
                    }
                }
                adaptiveLayout={
                   {
                    height:height,
                    width:width
                   }
                }
                centerRender={useCustomLabel?null:CenterTemplate}

            >
                
                <Series argumentField="label">
                </Series>
                {
                    useCustomLabel && (
                        <Legend
                            visible={type !== 'single'}
                            margin={0}
                            horizontalAlignment="right"
                            verticalAlignment="top"
                            customizeItems={(items) => {
                                return items.sort((a, b) => {
                                    let valA = a.points[0].percent * 100;
                                    let valB = b.points[0].percent * 100;
                                    if(valA < valB) return -1;
                                    if(valB > valA) return 1;
                                    return 0;
                                });
                            }}
                            itemTextPosition={'left'}
                            markerRender={(item) => {
                                
                                return (
                                    <text fill={item.marker.fill} width={40}>{(item.points[0].percent*100).toFixed()}%</text>
                                )
                            }}
                        />
                    )
                }               
                
                
            </PieChart>
        </Box>
        </React.Fragment>
    )
}