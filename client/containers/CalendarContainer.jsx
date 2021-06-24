import React, {useState} from 'react';
import DayContainer from './DayContainer.jsx';
import Calendar from 'react-calendar'

// import '../react-calendar/dist/Calendar.css';
// import 'react-calendar/dist/Calendar.css';

//need to add users to trips (fetch request)
//add trips too (fetch request)

const CalendarContainer = ({setDate, r}) => {
  
  // for (let day = 0; day < 31; day++) {
    //   <DayContainer key = {day}/>
    // }
    const [value, setValue] = useState(() => new Date())
    // const datesToAddContentTo = [tomorrow, in3Days, in5Days];

  // const tileContent = ({date, view}) => {
  //   if (view === "month") {
  //     if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
  //       return "my content";
  //     }
  //   }
  // }


  const click = (e) => {
    setDate(e)
    setValue(e)
    console.log(e)
  }
  // const setValue = () => {
  //   console.log(value);
  // }
  return (
    <div>
      <tileContent/>
      <Calendar
        // value = {value}
        onChange = {click}
        // onClickDay = {click}
      />
    </div>
  );
}

export default CalendarContainer;
