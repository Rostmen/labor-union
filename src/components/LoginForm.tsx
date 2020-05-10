import React from 'react'
import * as yup from 'yup'
import { withFormik, FormikProps, Form, Field } from 'formik'

// Shape of form values
interface FormValues {
  email: string
  password: string
}

interface OtherProps {
  message?: string
}

// this is just an example from Formik website
// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props
  return (
    <Form>
      <h1>{message}</h1>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      {isSubmitting ? <div>Submitting loader</div> : null}
    </Form>
  )
}

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string
  message?: string // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  validationSchema: yup.object().shape({
    password: yup.string().required(),
    email: yup.string().email().required(),
  }),
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: '',
    }
  },

  handleSubmit: values => {
    // let's imagine we send values somewhere
    return fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(data => console.log(data))
  },
})(InnerForm)

export default MyForm
