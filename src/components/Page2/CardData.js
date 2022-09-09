import React, { useRef } from "react";
import { Box } from "@mui/system";
import DateBox from "devextreme-react/date-box";
import { Button } from "devextreme-react/button";
import moment from "moment";

export default function CardData({ }) {
    const dateFromBox = useRef(null);
    const dateToBox = useRef(null);

    function setDateRange(value, type) {
        var current = new Date();
        var start = moment(current).subtract(value, type).format("YYYY-MM-DD");
        dateFromBox.current.instance.option("value", start);
        dateToBox.current.instance.option(
            "value",
            moment(current).format("YYYY-MM-DD")
        );
    }

    return (
        <React.Fragment>
            <Box sx={{ display: "flex", marginBottom: "12px" }}>
                <div style={{ flex: "1", margin: "0 15px " }}>
                    <DateBox
                        ref={dateFromBox}
                        type="date"
                        displayFormat="yyyy-MM-dd"
                        useMaskBehavior={true}
                        buttons={[]}
                    />
                </div>
                <div style={{ flex: "0 0 auto" }}>
                    <Button
                        className="calendar-button"
                        icon="/icons/calendar_white.svg"
                        type="normal"
                        stylingMode="text"
                        onClick={() => {
                            dateFromBox.current.instance.open();
                        }}
                    ></Button>
                </div>
            </Box>
        </React.Fragment>
    );
}
