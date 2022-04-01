import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const RSVPDatePicker = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

//   function onFormSubmit(e) {
//     e.preventDefault();
//     console.log(this.state.startDate)
//   }
  return (
    <form>
        <div className="form-group">
          <DatePicker
            locale="es"
            dateFormat="MM/dd/yyyy"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
          />
        </div>
    </form>

    );
    // <DatePicker
    //   locale="es"
    //   selectsRange={true}
    //   startDate={startDate}
    //   endDate={endDate}
    //   onChange={(update) => {
    //     setDateRange(update);
    //   }}
    //   isClearable={true}
    // />
};

export default RSVPDatePicker;