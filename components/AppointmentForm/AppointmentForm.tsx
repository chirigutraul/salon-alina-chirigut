import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IClient } from 'types';

function AppointmentForm() {
  return (
    <div>
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
        className="bg-light-pink w-[40rem] grid p-8 drop-shadow-md"
        >
          <label>First name:</label>
          <div className="mb-4">
          <Field 
          type="text"
          name="firstName"
          className="p-2 rounded-md drop-shadow-md w-full"
          />
          <ErrorMessage name="firstName" component="div" />
          </div>


          <label>Last name:</label>
          <Field 
          type="text" 
          name="lastName"
          className="p-2 rounded-md drop-shadow-md mb-4"
          />
          <ErrorMessage name="lastName" component="div" />

          <label>Phone:</label>
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