import React,{useState,useEffect,useRef} from "react";
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import RadioGroup from 'devextreme-react/radio-group';
import { Box } from "@mui/system";
import Card1 from "../../components/Page1/Card/Card1";
import Card2 from "../../components/Page1/Card/Card2";
import Card3 from "../../components/Page1/Card/Card3";

// import Card3 from "./cards/Card333";

const index = () => {
    // const dispatch = useDispatch()
    // const [show,setShow] = useState({erp:true,rnd:true});
    // const [shift,setShift] = useState(null);
    // const [orderNumber,setOrderNumber] = useState(null);
    // const location = useLocation();
    const searchRadios = [
        {
            text: "20라인",
            value: "20",
        },
        {
            text: "21라인",
            value: "21",
        },
    ]
    return (
       <React.Fragment>
        <div className={"content-block-upper"}>
            <Grid 
                container 
                spacing={4} 
                alignItems="stretch"
                sx={{'.MuiPaper-root': {padding: '15px 30px',}}}
                >
                <Grid item xs={3}>
                    <Paper  variant="outlined" 
                        sx={{backgroundColor:'#13181D',height:'306px',}}>
                        <p className={"boxTitle"} style={{marginTop:20, textAlign:'center'}}>라인 별 누적 생산 현황</p>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '50px',
                        }}>
                            <RadioGroup 
                            items={searchRadios} 
                            // defaultValue={location.state.line}
                            layout="horizontal"
                            valueExpr={'value'}
                            />
                        </Box>
                        <Box sx={{textAlign:'center',marginTop:'50px',fontSize: '18px', }}>
                            20라인 <p>일일 누적 생산 정보</p>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Card1 />          
                </Grid>
                <Grid item xs={2} >
                  <Card2 /> 
                </Grid>
                <Grid item xs={5}>
                 <Card3 /> 
                </Grid>
                
            </Grid>
        </div>
       </React.Fragment>
    );
};

export default index;