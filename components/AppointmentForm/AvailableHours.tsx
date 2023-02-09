import React, { FunctionComponent, useMemo } from 'react'
import useFormatDate from '@utils/hooks/Date/FormatDate';
interface AvailableHoursProps {
  date: any;
}

interface IMockUpHourseType {
  [key: string]: string[];
}

const mockUpHours: IMockUpHourseType = {
  '2023-02-18' : ['10:00', '13:00', '15:00', '17:00'],
  '2023-02-17' : ['13:00', '15:00',],
  '2023-02-16' : [],
}

const AvailableHours:FunctionComponent<AvailableHoursProps> = ({date}) => {
  const parsedDate = useMemo(() => {
    return useFormatDate(date);
  },[date])

  if(parsedDate) return <p>{JSON.stringify(parsedDate)}</p>

  if(mockUpHours[parsedDate] && mockUpHours[parsedDate].length === 0) {
    return <p>Nu exista ore disponibile in aceasta data!</p>
  }

  return (
    <div>
      {
        mockUpHours[parsedDate] && mockUpHours[parsedDate].map((hour, index) => {
          return <p>Ora:{hour}</p>
        })
      }
    </div>
  )
}

export default AvailableHours