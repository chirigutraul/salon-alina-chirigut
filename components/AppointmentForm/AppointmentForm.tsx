import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IClient } from 'types';
import { useSession } from "next-auth/react"
import Link from 'next/link'

function AppointmentForm() {
  const { data: session } = useSession();

  if(!session) return null;

  return (
    <div className="bg-light-pink mt-2 mb-2">
    <div className='flex flex-col pt-2'>
      <div className='flex justify-center'>
      <p className='text-2xl'>Buna, {session.user.name}</p>
      </div>
      <div className='flex justify-center w-50 pt-2'>
        <p>Te rugam sa completezi urmatorul formular pentru a realiza o programare</p>
      </div>
    </div>
    <Formik
      initialValues={{ firstName: '', lastName: '', phone:'' }}
      validate={
        values => {
        const errors = {} as IClient;
        if (!values.firstName) {
          errors.firstName = 'Required';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form
        className="w-full grid p-8 drop-shadow-md"
        >
          <label>Numar telefon *todo change inputs:</label>
          <div className="mb-4">
          <Field 
          type="text"
          name="firstName"
          className="p-2 rounded-md drop-shadow-md w-full"
          />
          <ErrorMessage name="firstName" component="div" />
          </div>


          <label>Data:</label>
          <Field 
          type="text" 
          name="lastName"
          className="p-2 rounded-md drop-shadow-md mb-4"
          />
          <ErrorMessage name="lastName" component="div" />

          <label>Ora:</label>
          <Field 
          type="text" 
          name="phone"
          className="p-2 rounded-md drop-shadow-md mb-4"
          />
          <ErrorMessage name="lastName" component="div" />

          <button
          type="submit"
          disabled={isSubmitting}
          className="bg-medium-purple-2 text-white rounded-md w-32 p-4 drop-shadow-lg"
          >
            Submit
          </button>
          <Link
          href="/api/auth/signout">
            sign out
          </Link>
        </Form>

   
      )}
    </Formik>
  </div>
  )
}

export default AppointmentForm

{/* <button
type="submit"

>
Submit
</button> */}