import React from 'react';
import { Box } from "@mui/system";
import ProgBar from '../../../components/Page3/ProgBar';
const Cards1 = () => {
    return (
        <>
        <Box sx={{height:'100%', backgroundColor:'#2c3034',padding:'10px'}}>
        <p className={"boxTitle"}>라인 별 누적 생산 현황</p>
        <p>작업조 정보<br />현재 작업조 : 주간 작업조 A</p>
        <Box sx={{padding:'10px'}}>
        <p>라인운영 현황</p>
                20라인
        <ProgBar outer={100}
                inner={100}
                time= '가동 20 분'
                height={21}
                outerColor="#999999"
                innerColor="#73DE45"
                />
        </Box>
        <Box>
            
        </Box>
        <ProgBar outer={100}
                inner={8}
                inner1={5}
                inner2={15}
                inner3={15}
                inner4={7}
                height={21}
                outerColor="#999999"
                innerColor="#73DE45"
                inner1Color="#FF4E38"
                inner2Color="#73DE45"
                inner3Color="#FF4E38"
                inner4Color="#73DE45"
                />
             
        </Box>
            
        </>
    );
};

export default Cards1;