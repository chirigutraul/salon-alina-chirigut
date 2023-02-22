import Button from 'components/Button'
import { Session } from 'next-auth';
import React, { FunctionComponent, useState } from 'react'
import { updateClientById } from 'utils/hooks/requests/clients';

interface Props {
  session: Session | null;
}

const AuthenticatedUserWithoutPhone: FunctionComponent<Props> = ({session}) => {
  const [phone, setPhone] = useState<string>();

  const addPhoneNumberToUser = async () => {
    if(session) {
      if(phone && session.user.id) {
        await updateClientById(session.user.id, {phone}).then(res => {
          if(res){
            window.location.reload();
          }
        })
      }
    }
  }

  return (
    <div>
      <div 
        className={`
        bg-light-pink w-full px-8 py-8 my-4 flex flex-col items-center gap-8
        `}
      >
        <p
          className={`
          text-center text-2xl font-medium text-dark-purple
          `}
        >
        Pentru a putea face programari, te rugam sa adaugi numarul de telefon.
        </p>
        <input
          type='text'
          name='phone'
          placeholder='Numar de telefon'
          onChange={(e) => setPhone(e.target.value)}
          className='w-full h-12 rounded-sm shadow-sm border border-gray-300 px-4'
        />
        <Button
          type='submit'
          title='Confirma'
          size='xl'
          onClick={addPhoneNumberToUser}
        />
      </div>
    </div>
  )
}

export default AuthenticatedUserWithoutPhone