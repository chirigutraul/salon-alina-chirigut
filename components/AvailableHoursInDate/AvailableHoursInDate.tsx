import React, { FunctionComponent } from 'react'

interface Props {
  date: Date;
}

const AvailableHoursInDate: FunctionComponent<Props> = ({date}) => {
  return (
    <div>{JSON.stringify(date)}</div>
  )
}

export default AvailableHoursInDate