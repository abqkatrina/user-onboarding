import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from'formik';
import { Toast, ToastBody } from 'reactstrap';
import axios from 'axios';
import * as Yup from 'yup';

const LoginForm = () => {

    const [users, setUsers] = useState([]);

    axios
         .post('https://reqres.in/api/users', users)
         .then(response => {
             console.log('axios post works', response)
             setUsers(...response.data, users)})
         .catch(error => {console.log('axios not working', error)})

    return (
        <div className='body'>
        <Formik
            initialValues={{ first_name: '', last_name: '', email: '', password: '', terms: ''}}
            validationSchema={Yup.object({
                first_name: Yup.string()
                .min(2, 'Must be 2 characters or more')
                .required('Required'),
                last_name: Yup.string()
                .min(2, 'Must be 2 characters or more')
                .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
        >
            <Form style={{border:'2px dashed blue'}}>
                <label htmlFor="first_Name">  First Name: </label>
                <Field name="first_Name" type="text" />
                <ErrorMessage name="first_Name" />
            <br/>
                <label htmlFor="last_Name">  Last Name: </label>
                <Field name="last_Name" type="text" />
                <ErrorMessage name="last_Name" />
            <br/>
                <label htmlFor="email">  Email Address: </label>
                <Field name="email" type="email" placeholder='Email'/>
                <ErrorMessage name="email" />
            <br/>
                <label htmlFor="password">  Password: </label>
                <Field name="password" type="password" placeholder='Password'/>
                <ErrorMessage name="password" />
            <br/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        {/* <div className='container' style={{border: '2px dotted red'}}>
            {props.users.map(user => (
                //console.log("user in card-list", user),
                <ul key={user.id}>
                    <li>
                        <Toast className='card'>
                            <ToastBody>
                                <h2>{user.first_name}{user.last_name}</h2>
                                <p>{user.email}</p>
                            </ToastBody>
                        </Toast>
                    </li>
                </ul>)
            )}
        </div> */}
        </div>
    ) // close return       
} // close LoginForm

export default LoginForm;