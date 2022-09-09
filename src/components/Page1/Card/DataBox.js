import React from "react";
import DateBox from "devextreme-react/date-box";



const date = new Date(2022, 7, 9, 15, 8, 12);

class DataBox extends React.Component {
  render() {
    return (
      <div>
        <div className="dx-field">
          <div className="dx-field">
            <div style={{ width: 236, height: 31 }}>
              <DateBox 
              
                defaultValue={date}
                placeholder="08/08/2022"
                showClearButton={false}
                useMaskBehavior={true}
                type="date"
                displayFormat="shortdate"
                
                />
            </div>
          </div>

          <div className="dx-field">
            <div style={{ width: 236, height: 31 }}>
              <DateBox
                defaultValue={date}
                placeholder="10/16/2022"
                showClearButton={false}
                useMaskBehavior={true}
                type="date"
                displayFormat={"shortdate"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DataBox;
