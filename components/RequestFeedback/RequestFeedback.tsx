import React, { FunctionComponent } from 'react'
import { roboto } from 'utils/fonts'

interface Props {
  status: number,
  message: string,
}

const RequestFeedback: FunctionComponent<Props> = ({ status, message }) => {
  return (
    <div
      className={`
    p-4 w-full rounded-sm
    ${status === 200 ? 'bg-green-100' : 'bg-red-100'}
    `}
    >
      <p className={`
      ${roboto.className}
      text-lg font-light
      `}>
        {message}
      </p>
    </div>
  )
}

export default RequestFeedback