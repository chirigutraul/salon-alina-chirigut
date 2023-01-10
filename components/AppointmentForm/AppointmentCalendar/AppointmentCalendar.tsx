import React, { useState } from 'react'
import DatePicker, { CalendarContainer } from "react-datepicker";

function AppointmentCalendar() {
  const [startDate, setStartDate] = useState<Date>();

  const MyContainer = ({ children }:{ children: React.ReactNode}) => {
    return (
      <div className='p-16 bg-dark-purple text-white z-10'>
        <CalendarContainer>
          <div style={{ background: "red" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <DatePicker
    selected={startDate}
    onChange={(date:Date) => setStartDate(date)}
    calendarContainer={MyContainer}
    />
  )
}

export default AppointmentCalendar