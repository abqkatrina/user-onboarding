import React from 'react';
import { Formik, Form, Field } from 'formik';
import './App.css';

function App() {
  return (
    //create the value of the form
    <Formik 
      initialValues={{name: '', email: '', password: '', terms: true,}}
      onSubmit={(values, tools) => {
        console.log(values, tools);
        tools.resetForm();
      }}
      //create the form html
      render={props => {
          return(
            <Form>
              <Field name='name'/>
              <Field name='email'/>
              <Field name='password'/>
              <input type='checkbox' name='terms'/>
              <input type='submit'/>
            </Form>
          ) //close return
        }//close render function
      } //close render
    /> //close Formik
  ); //close return
}

export default App;
