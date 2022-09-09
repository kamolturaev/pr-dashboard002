import React,{useState,useEffect,useRef} from "react";
import Paper from '@mui/material/Paper';
import { Box } from "@mui/system";
import _ from 'lodash';
import Chart,{Legend} from "devextreme-react/chart";
import { CheckBox } from 'devextreme-react/check-box';

export default function CardB({data}){
    const [filter, setFilter] = useState({show20:false,show21:false});

    return (
        <React.Fragment>
            <Paper sx={{height:'100%'}}>
                <Box sx={{display:'flex',justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
                    <p className={"boxTitle"} style={{marginBottom:0}}>수율 추세</p>
                    <CheckBox
                        defaultValue={filter.show20}
                        text="20라인"
                        onValueChange={(e)=>{
                            setFilter({...filter,show20:e})
                        }}
                    />
                    <CheckBox
                        defaultValue={false}
                        text="21라인"
                        onValueChange={(e)=>{
                            setFilter({...filter,show21:e})
                        }}
                    />
                </Box>
                <Chart
                    palette={["#ECB328","#FFA482","#809EE0","#2B79FF"]}
                    size={{
                        height: 240,
                    }}
                    
                    argumentAxis={{
                        type: "date",
                        label: {
                            wordWrap: "none",
                            overlappingBehavior:"stagger"
                        }
                    }}
                    dataSource={data}
                    commonSeriesSettings={
                        {
                            width:1,
                            point:{
                                size:6
                            },
                            label: {
                                visible: false,
                            },
                            argumentField: "date",
                            type: "line",
                        }
                    }
                    valueAxis={{
                        // visualRange: chart_visualRange,
                        width:0,
                        tick:{
                            width:0
                        }
                    }}
                    series={
                        [
                            {
                                argumentField: "date",
                                valueField: "erp_20",
                                name: "ERP 20 수율",
                                visible: filter.show20,
                            },
                            {
                                valueField: "rnd_20",
                                name: "R&D 20 수율",
                                visible: filter.show20,
                            },
                            {
                                valueField: "erp_21",
                                name: "ERP 21 수율",
                                visible: filter.show21,
                            },
                            {
                                valueField: "rnd_21",
                                name: "R&D 21 수율",
                                visible: filter.show21,

                            },
                        ]
                    }
                >
                    <Legend
                        visible={true}
                        verticalAlignment={"bottom"}
                        horizontalAlignment={"center"}
                        markerSize={0}
                        customizeText={()=> {return null}}
                        margin={{top:20}}
                        markerRender={(item)=> {
                            return (
                                <text fill={item.marker.fill} opacity={item.textOpacity}>{item.text}</text>
                            )
                        }}
                        
                    />
                </Chart>
            </Paper>
        </React.Fragment>
    )
}





