import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

function Login() {

const [users, newUser] = useState([]);

const handleSubmit = (values, tools) => {
    axios.post('https://reqres.in/api/users', values)
        .then( response => {
            console.log(response)
            newUser(response.data.users)
            tools.resetForm()
        })
        .catch()
        .finally(() => {
            tools.setSubmitting(false);
        })
}


const validate =({ name, email, password, terms}) => {
    const errors= {};
  //validate name
    if(!name){
      errors.name = 'Name required.'
    } else if (name.length < 2){
      errors.name = 'Name must be longer than one letter.'
    }

  //validate email
    if(!email){
      errors.email = 'Email required.'
    }
  
  //validate password
    if(password.length < 6){
      errors.password = 'Password must be longer than six characters.'
    }
    return errors;
}

  return (
    //create the value of the form
    <Formik 
      initialValues = {{name: '', email: '', password: '', terms: ''}}
      onSubmit = { handleSubmit }
      validate = {validate}

      //create the form html
      render = {props => {
        console.log(props);

        return(
            <div className='container'>
                <div className='Form'>
                    <Form>
                        <Field name='name' type='text' placeholder='Enter Name' required/>
                        <ErrorMessage name='name' component='div'/>
                        
                        <Field name='email' type='text' placeholder='Enter Email' required/>
                        <ErrorMessage name='email' component='div'/>
                        
                        <Field name='password' type='text' placeholder='Enter Password' required/>
                        <ErrorMessage name='password' component='div'/>
                        
                        <Field name='terms' type='checkbox' checked= {props.terms} required/>
                        
                        <button type='submit'disabled={props.isSubmitting}>
                            {
                                props.isSubmitting ? 'please wait' : 'submit'
                            }
                        </button>
                    </Form>
                </div>
                <div className='results' style={{border: '2px solid red'}}>
                    {users}
                </div>
            </div>
        ) //close return
      }}//close render function
    /> //close Formik
  ); //close return
}

export default Login;