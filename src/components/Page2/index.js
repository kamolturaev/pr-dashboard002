import React,{useState,useEffect,useRef} from "react";
import { Grid } from "@mui/material";
import Form, { ButtonItem, EmptyItem, GroupItem, SimpleItem } from "devextreme-react/form";
import Paper from '@mui/material/Paper';
import { CheckBox } from 'devextreme-react/check-box';
import Chart,{Legend} from "devextreme-react/chart";
import { Box } from "@mui/system";
import Doughnut from "../../components/doughnut/doughnut";
import ProgressBar from "../../components/dashboard/ProgressBar";
import Tabs from "../../components/Tabs/Tabs";
import _ from 'lodash';
import { Popup, Position, ToolbarItem } from 'devextreme-react/popup';

import Tab1 from "./tab/tab1";
import Detail1 from "./detail/detail1";
import Detail2 from "./detail/detail2";
import Detail3 from "./detail/detail3";
import ScrollView from 'devextreme-react/scroll-view';

export default function DataBox2({show=false,setShow,filter,title}) {
    return (
        <React.Fragment>
            <Popup
                visible={show}
                dragEnabled={false}
                hideOnOutsideClick={true}
                showTitle={true}
                title={title}
                container=".dx-viewport"
                onHiding={()=>setShow(false)}
            >
                <ScrollView
                    height={"100%"}
                    showScrollbar={true}
                >
                    <Detail1 key={"detail1"} title={"2022년 5월 2일~2022년 5월 8일 수율 목록"}/>                    
                    <Detail2 key={"detail2"}  title={"수율 분포"}/>                    
                    <Detail3 key={"detail3"}  title={"2022년 5월 8일 수율 분석"}/>                    
                    <Tabs 
                        style={{marginTop:20}}
                        withScroll={false}
                        data={[
                            {
                                title:'수율 주요 인자 분석',
                                component:(
                                    <Tab1 
                                        title={'수율 주요 인자 분석'}
                                    />)
                            },
                        ]}/>
                </ScrollView>
            </Popup>
        </React.Fragment>
    );
}